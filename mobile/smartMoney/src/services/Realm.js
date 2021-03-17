import Realm from 'realm'
import EntrySchema from '../schemas/EntrySchema'
import CategorySchema from '../schemas/CategorySchema'

import { getAllCategories } from './Categories'

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 2
  })
  initDB(realm)
  return realm
};

export const initDB = (realm) => {
  const categoriesLength = realm.objects('Category').length
  console.log(`initDB :: quantidade de categorias no DB: ${categoriesLength}`)

  if (categoriesLength === 0) {
    const categories = getAllCategories()
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
};