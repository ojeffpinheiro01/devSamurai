import { Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore'

import moment from '../vendors/moment'

export const getEntries = async (days, category) => {
  let querySnapshot
  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate()
    querySnapshot = await firestore()
      .collection('entries')
      .orderBy('entryAt')
      .startAt(date)
      .get()
  } else {
    querySnapshot = await firestore()
      .collection('entries')
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
  let data = {}

  try {
    data = {
      amount: entry.amount,
      entryAt: entry.entryAt || new Date(),
      description: entry.category.name,
      photo: entry.photo,
      address: entry.address,
      latitude: entry.latitude,
      longitude: entry.longitude,
      isInit: entry.isInit || false,
      category: entry.category
    }

    await firestore().collection('entries').add(data)
  } catch (err) {
    console.log(err.message)
    Alert.alert('Oops', 'Houve um erro ao salvar os dados de lançamento.')
  }

  return data
}

export const updateEntry = async (entry) => {
  let data = {}
  
  try {
    data = {
      amount: entry.amount,
      entryAt: entry.entryAt || new Date(),
      description: entry.category.name,
      photo: entry.photo,
      address: entry.address,
      latitude: entry.latitude,
      longitude: entry.longitude,
      isInit: entry.isInit || false,
      category: entry.category,
    }

    await firestore().collection('entries').doc(entry.id).update(data)
  } catch (err) {
    console.tron.error(err.message)
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