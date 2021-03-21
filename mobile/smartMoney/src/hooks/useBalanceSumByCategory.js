import { useEffect, useState } from 'react'

import { getBalanceSumByCategory } from '../services/Balance'

const useBalanceSumByCategory = (days = 7) => {
    const [balanceSum, setBalanceSum] = useState([])

    useEffect(() => {
        async function loadBalanceSumByCategory(){
            const data = await getBalanceSumByCategory()
            setBalanceSum([...data])
        }
        loadBalanceSumByCategory()
    }, [days])
    return [balanceSum]
}

export default useBalanceSumByCategory