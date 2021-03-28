import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

import { getBalance } from '../services/Balance'

const useBalance = () => {
  const navigation = useNavigation()
  const [balance, setBalance] = useState()

  useEffect(() => {
    const loadBalance = navigation.addListener('focus', async () => {
      const value = await getBalance()
      setBalance(value)
    });
    return loadBalance
  }, [navigation])

  return [balance]
};

export default useBalance