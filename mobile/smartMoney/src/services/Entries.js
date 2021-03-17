import {Alert} from 'react-native';
import { getRealm } from './Realm';
import { getUUID } from './uuid'

export const getEntries = async () => {
  const realm = await getRealm();
  const entries = realm.objects('Entry');
  console.log('getEntries :: entries: ', JSON.stringify(entries))
  return entries;
};

export const saveEntry = async (value, entry = {}) => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: value.id || entry.id || getUUID(),
        amount: value.amount || entry.amount,
        category: value.category || entry.category,
        entryAt: value.entryAt || entry.entryAt,
        isInit: false
      };
      realm.create('Entry', data, true);
    });
    console.log('saveEntry :: data: ', JSON.stringify(data));
  } catch (err) {
    console.log('saveEntry :: erro ao salvar ' + JSON.stringify(data));
    console.log(err)
    Alert.alert('Oops', 'Erro ao salvar');
  }

  return data;
};

export const delEntry = async (entry) => {
  const realm = await getRealm();

  try {
    realm.write(() => { realm.delete(entry) })
  } catch (err) {
    console.log('delEntry :: erro ao deletar ', JSON.stringify(entry))
    console.log('delEntry :: erro ao deletar ', err)
    Alert.alert('Oops', 'Erro ao excluir esse lançamento')
  }
}