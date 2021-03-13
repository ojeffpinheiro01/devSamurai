import {Alert} from 'react-native';
import {getRealm} from './Realm';

export const getEntries = async () => {
  const realm = await getRealm();
  const entries = realm.objects('Entry');
  console.log('getEntries :: entries: ', JSON.stringify(entries))
  return entries;
};

export const saveEntry = async (value) => {
  const realm = await getRealm();
  let data = {};
  const {amount} = value;

  try {
    realm.write(() => {
      data = {
        id: 'ABC',
        amount: amount,
        entryAt: new Date(),
        isInit: false,
      };
      realm.create('Entry', data, true);
    });
    console.log(data);
  } catch (err) {
    console.log('saveEntry :: erro ao salvar ' + JSON.stringify(data));
    Alert.alert('Oops', 'Erro ao salvar');
  }

  return data;
};
