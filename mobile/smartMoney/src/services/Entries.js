import { Alert } from 'react-native'

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

  if(category && category.id) {
    realm = realm.filtered('category == $0', category);
  }
  
  const entries = realm.sorted('entryAt', true)
  return entries
  } catch (err) {
    console.log(err.message)
  }
}

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm()
  let data = {}

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        entryAt: value.entryAt || entry.entryAt,
        description: value.category.name,
        photo: value.photo,
        address: value.address || entry.address,
        latitude: value.latitude || entry.latitude,
        longitude: value.longitude || entry.longitude,
        isInit: false,
        category: value.category || entry.category,
      }
      realm.create('Entry', data, true)
    })
  } catch (err) {
    console.log('saveEntry :: erro ao salvar ' + JSON.stringify(data))
    console.log(err.message)
    Alert.alert('Oops', 'Erro ao salvar')
  }

  return data
}

export const delEntry = async (entry) => {
  const realm = await getRealm()

  try {
    realm.write(() => { realm.delete(entry) })
  } catch (err) {
    console.log('delEntry :: erro ao deletar ', JSON.stringify(entry))
    console.log('delEntry :: erro ao deletar ', err)
    Alert.alert('Oops', 'Erro ao excluir esse lançamento')
  }
}