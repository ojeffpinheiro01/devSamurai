import { useEffect, useState } from 'react'

import {
    getAllCategories,
    getDebitCategories,
    getCreditCategories,
    getInitCategories,
} from '../services/Categories'

const useCategories = () => {
    const [allCategories, setAllCategories] = useState()
    const [debitCategories, setDebitCategories] = useState()
    const [creditCategories, setCreditCategories] = useState()
    const [initCategory, setInitCategory] = useState()

    useEffect(() => {
        const loadAllCategories = async () => {
            const data = await getAllCategories()
            setAllCategories(data)
        }

        const loadDebitCategories = async () => {
            const data = await getDebitCategories()
            setDebitCategories(data)
        }

        const loadCreditCategories = async () => {
            const data = await getCreditCategories()
            setCreditCategories(data)
        }

        const loadInitCategory = async () => {
            const data = await getInitCategories()
            setInitCategory(data)
        }

        loadDebitCategories()
        loadCreditCategories()
        loadAllCategories()
        loadInitCategory()
    }, [])
    return [allCategories, debitCategories, creditCategories, initCategory]
}

export default useCategories