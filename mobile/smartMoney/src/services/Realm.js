import Realm from 'realm'
import EntrySchema from '../schemas/EntrySchema'
import CategorySchema from '../schemas/CategorySchema'

import { getDefaultCategories } from './Categories'
import { cleanInitialized } from './Onboarding'

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 2
  })

  // dropDB(realm)
  // cleanInitialized()
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
  }
}

export const dropDB = realm => {
  console.log('dropDB :: dropping db...')
  realm.write(() => {
    realm.deleteAll()
  })
}