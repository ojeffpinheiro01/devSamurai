import { useEffect, useState } from 'react'

import { getBalanceSumByDate } from '../services/Balance'

const useBalanceSumByDate = (days = 7) => {
  const [balanceSum, setBalanceSum] = useState([])

  useEffect(() => {
    async function loadBlanceSumByDate() {
      const data = await getBalanceSumByDate(days)
      setBalanceSum([...data])
    }
    loadBlanceSumByDate()
  }, [days])

  return [balanceSum]
}

export default useBalanceSumByDate