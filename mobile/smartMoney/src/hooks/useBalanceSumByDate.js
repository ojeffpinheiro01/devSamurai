import { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

import { getBalanceSumByDate } from '../services/Balance'

const useBalanceSumByDate = (days = 7) => {
  const [balanceSum, setBalanceSum] = useState([])

  useFocusEffect(
    useCallback(() => {
      const loadBlanceSumByDate = async () => {
        const data = await getBalanceSumByDate(days)
        setBalanceSum([...data])
      }
      loadBlanceSumByDate()
    }, [days])
  )

  return [balanceSum]
}
export default useBalanceSumByDate