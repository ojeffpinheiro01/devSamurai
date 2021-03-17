import Realm from 'realm'
import EntrySchema from '../schemas/EntrySchema'
import CategorySchema from '../schemas/CategorySchema'

import { getDefaultCategories } from './Categories'

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 2
  })

  //dropDB(realm)
  initDB(realm)
  return realm
};

export const initDB = (realm) => {
  const categoriesLength = realm.objects('Category').length
  console.log(`initDB :: quantidade de categorias no DB: ${categoriesLength}`)

  if (categoriesLength === 0) {
    const categories = getDefaultCategories()
    console.log(`initBD :: iniciando DB...`)

    try {
      realm.write(() => {
        categories.forEach((category) => {
          console.log(`initDB :: criando categoria: ${JSON.stringify(category)}`)
          realm.create('Category', category, true)
        });
      });
    } catch (err) {
      console.log('initDB :: erro: ' + JSON.stringify(err))
    }
  } else {
    console.log('initDB :: categorias já existem... saindo')
  }
}

export const dropDB = realm => {
  console.log('dropDB :: dropping db...');
  realm.write(() => {
    realm.deleteAll()
  })
}