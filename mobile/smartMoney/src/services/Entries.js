import { Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore'

import moment from '../vendors/moment'
import { getUserAuth } from './Auth'

export const getEntries = async (days, category) => {
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

  let entries = querySnapshot.docs.map((documentSnapshot) => {
    return { ...documentSnapshot.data(), id: documentSnapshot.id }
  })

  if (category && category.id) {
    entries = entries.filter((entry) => entry.category.id === category.id)
  }

  return entries
}

export const addEntry = async (entry) => {
  const userAuth = await getUserAuth()
  let data = {}

  try {
    data = {
      amount: entry.amount,
      description: entry.category.name,
      entryAt: entry.entryAt || new Date(),
      latitude: entry.latitude,
      longitude: entry.longitude,
      address: entry.address,
      photo: entry.photo,
      isInit: entry.isInit || false,
      category: entry.category,
      userId: userAuth
    }

    await firestore().collection('entries').add(data)
  } catch (err) {
    console.log(err.message)
    Alert.alert('Oops', 'Houve um erro ao salvar os dados de lançamento.')
  }

  return data
}

export const updateEntry = async (entry) => {
  const userAuth = await getUserAuth()
  let data = {}

  try {
    data = {
      amount: entry.amount,
      description: entry.category.name,
      entryAt: entry.entryAt || new Date(),
      latitude: entry.latitude,
      longitude: entry.longitude,
      address: entry.address,
      photo: entry.photo,
      isInit: entry.isInit || false,
      category: entry.category,
      userId: userAuth
    }

    await firestore().collection('entries').doc(entry.id).update(data)
  } catch (err) {
    console.tron.error('updateEntry :: erro => ' + err.message)
    console.tron.error('updateEntry :: data => ' + JSON.stringify(this.data))
    Alert.alert('Oops', 'Houve um erro ao atualizar os dados de lançamento.')
  }

  return data
}

export const delEntry = async (entry) => {
  try {
    await firestore().collection('entries').doc(entry.id).delete()
  } catch (error) {
    console.tron.error('delEntry :: erro ao deletar ', JSON.stringify(entry))
    console.tron.error('delEntry :: erro ao deletar ', err)
    Alert.alert('Oops', 'Erro ao excluir esse lançamento')
  }
}