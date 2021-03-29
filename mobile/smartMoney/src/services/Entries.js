import { Alert } from 'react-native'
import firestore from '@react-native-firebase/firestore';

import moment from '../vendors/moment'

import { getRealm } from './Realm'
import { getUUID } from './uuid'

export const getEntries = async (days, category) => {
  let realm = await getRealm()
  try {
    realm = realm.objects('Entry')

    if (days > 0) {
      const date = moment().subtract(days, 'days').toDate()
      realm = realm.filtered('entryAt >= $0', date)
    }

    if (category && category.id) {
      realm = realm.filtered('category == $0', category)
    }

    const entries = realm.sorted('entryAt', true)
    return entries
  } catch (err) {
    console.log(err.message)
  }
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

export const delEntry = async (entry) => {
  const realm = await getRealm()
  try {
    const entryRealmObject = realm
      .objects('Entry').filtered('id == $0', entry.id)[0]
    realm.write(() => {
      realm.delete(entryRealmObject)
    });
  } catch (err) {
    console.log('delEntry :: erro ao deletar ', JSON.stringify(entry))
    console.log('delEntry :: erro ao deletar ', err)
    Alert.alert('Oops', 'Erro ao excluir esse lançamento')
  }
}