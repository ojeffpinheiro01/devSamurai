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
}

export const initDB = (realm) => {
  const categoriesLength = realm.objects('Category').length

  if (categoriesLength === 0) {
    const categories = getDefaultCategories()

    try {
      realm.write(() => {
        categories.forEach((category) => {
          realm.create('Category', category, true)
        })
      })
    } catch (err) {
      console.log('initDB :: erro: ' + JSON.stringify(err))
    }
  } else {
    console.log('initDB :: categorias já existem... saindo')
  }
}

export const dropDB = realm => {
  console.log('dropDB :: dropping db...')
  realm.write(() => {
    realm.deleteAll()
  })
}