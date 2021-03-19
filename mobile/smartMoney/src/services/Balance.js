import { getRealm } from './Realm'

export const getBalance = async () => {
  const realm = await getRealm()
  let entries = realm.objects('Entry')
  return entries.sum('amount')
}