import _ from 'lodash'
import firestore from '@react-native-firebase/firestore'
import moment from '../vendors/moment'

import { getUUID } from './uuid'
import { getUserAuth } from './Auth'

import Colors from '../styles/colors'

export const getBalance = async (untilDays = 0) => {
  const userAuth = await getUserAuth()
  let querySnapshot

  if (untilDays > 0) {
    const date = moment().subtract(untilDays, 'days').toDate()
    querySnapshot = await firestore()
      .collection('entries')
      .where('userId', '==', userAuth)
      .orderBy('entryAt')
      .endBefore(date)
      .get()
  } else {
    querySnapshot = await firestore()
      .collection('entries')
      .where('userId', '==', userAuth)
      .get()
  }

  return _(querySnapshot.docs).reduce((total, doc) => {
    return total + doc.data().amount
  }, 0)
}

export const getBalanceSumByDate = async (days) => {
  const userAuth = await getUserAuth()
  let querySnapshot
  const startBalance = (await getBalance(days)) || 0

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate()
    querySnapshot = await firestore()
      .collection('entries')
      .where('userId', '==', userAuth)
      .orderBy('entryAt')
      .startAt(date)
      .get()
  } else {
    querySnapshot = await firestore()
      .collection('entries')
      .where('userId', '==', userAuth)
      .orderBy('entryAt')
      .get()
  }

  let entries = querySnapshot.docs.map((documentSnapshot) => documentSnapshot.data())

  entries = _(entries)
    .groupBy(({entryAt}) => moment(entryAt).format('YYYYMMDD'))
    .map((entry) => _.sumBy(entry, 'amount'))
    .map((amount, index, collection) => {
      return (
        (index === 0 ? startBalance : 0) +
        _.sum(_.slice(collection, 0, index)) +
        amount
      )
    })
  return entries
}

export const getBalanceSumByCategory = async (days, showOthers = true) => {
  const userAuth = await getUserAuth()
  let querySnapshot

  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate()
    querySnapshot = await firestore()
      .collection('entries')
      .where('userId', '==', userAuth)
      .orderBy('entryAt')
      .startAt(date)
      .get()
  } else {
    querySnapshot = await firestore()
      .collection('entries')
      .where('userId', '==', userAuth)
      .orderBy('entryAt')
      .get()
  }

  let entries = querySnapshot.docs.map((documentSnapshot) =>
    documentSnapshot.data()
  )

  entries = _(entries)
    .groupBy(({ category: { id } }) => id)
    .map((entry) => ({
      category: _.omit(entry[0].category, 'entries'),
      amount: Math.abs(_.sumBy(entry, 'amount'))
    }))
    .filter(({ amount }) => amount > 0)
    .orderBy('amount', 'desc')

  const othersLimit = 3

  if (showOthers && _(entries).size() > othersLimit) {
    const data1 = _(entries).slice(0, othersLimit)
    const data2 = [{
      category: { id: getUUID(), name: 'Outros', color: Colors.metal },
      amount: _(entries)
        .slice(othersLimit)
        .map(({ amount }) => amount)
        .sum()
    }]
    entries = [...data1, ...data2]
  }

  return entries
}