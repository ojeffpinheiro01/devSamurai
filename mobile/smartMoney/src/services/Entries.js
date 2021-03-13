import { Alert } from 'react-native';
import {getRealm} from './Realm';

export const saveEntry = async () => {
  const realm = await getRealm();
  let data = {};

  try {
    realm.write(() => {
      data = {
        id: 'ABC',
        amount: 12.4,
        entryAt: new Date(),
        isInit: false,
      };
      realm.create('Entry', data, true);
    });
    console.log(data);
  } catch (err) {
    console.log('saveEntry :: erro ao salvar ' + JSON.stringify(data))
    Alert.alert('Oops', 'Erro ao salvar')
  }

  return data;
};
