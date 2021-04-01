import firestore from '@react-native-firebase/firestore'

import { getUUID } from './uuid'

export const getDefaultCategories = () => {
  return [
    {
      id: getUUID(),
      name: 'Alimentação',
      isDebit: true,
      color: '#1abc9c',
      order: 0,
    }, {
      id: getUUID(),
      name: 'Restaurantes e Bares',
      isDebit: true,
      color: '#2ecc71',
      order: 1,
    }, {
      id: getUUID(),
      name: 'Casa',
      isDebit: true,
      color: '#3498db',
      order: 2,
    }, {
      id: getUUID(),
      name: 'Compras',
      isDebit: true,
      color: '#9b59b6',
      order: 3,
    }, {
      id: getUUID(),
      name: 'Cuidados Pessoais',
      isDebit: true,
      color: '#f1c40f',
      order: 4,
    }, {
      id: getUUID(),
      name: 'Dívidas e Emprestimos',
      isDebit: true,
      color: '#f39c12',
      order: 5,
    }, {
      id: getUUID(),
      name: 'Educação',
      isDebit: true,
      color: '#e67e22',
      order: 6,
    }, {
      id: getUUID(),
      name: 'Família e Filhos',
      isDebit: true,
      color: '#d35400',
      order: 7,
    }, {
      id: getUUID(),
      name: 'Impostos e Taxas',
      isDebit: true,
      color: '#e74c3c',
      order: 8,
    }, {
      id: getUUID(),
      name: 'Investimentos',
      isDebit: true,
      color: '#c0392b',
      order: 9,
    }, {
      id: getUUID(),
      name: 'Lazer',
      isDebit: true,
      color: '#ecf0f1',
      order: 10,
    }, {
      id: getUUID(),
      name: 'Mercado',
      isDebit: true,
      color: '#bdc3c7',
      order: 11,
    }, {
      id: getUUID(),
      name: 'Outras Despesas',
      isDebit: true,
      color: '#95a5a6',
      order: 12,
    }, {
      id: getUUID(),
      name: 'Empréstimos',
      isCredit: true,
      color: '#273c75',
      order: 1,
    }, {
      id: getUUID(),
      name: 'Investimentos',
      isCredit: true,
      color: '#4cd137',
      order: 2,
    }, {
      id: getUUID(),
      name: 'Salário',
      isCredit: true,
      color: '#487eb0',
      order: 3,
    },
    {
      id: getUUID(),
      name: 'Outras Receitas',
      isCredit: true,
      color: '#8c7ae6',
      order: 4,
    }, {
      id: getUUID(),
      name: 'Saldo Inicial',
      isInit: true,
      color: '#27ae60',
      order: 5,
    }
  ]
}

export const getAllCategories = async () => {
  const querySnapshot = await firestore()
  .collection('categories')
  .orderBy('order')
  .get()

const allCategories = querySnapshot.docs.map((documentSnapshot) => {
  return {
    ...documentSnapshot.data(),
    id: documentSnapshot.id
  }
})

return allCategories
}

export const getDebitCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .where('isDebit', '==', true)
    .where('isInit', '==', false)
    .orderBy('order')
    .get()

  const debitCategories = querySnapshot.docs.map((documentSnapshot) => {
    return {
      ...documentSnapshot.data(),
      id: documentSnapshot.id
    }
  })

  return debitCategories
}

export const getCreditCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .where('isCredit', '==', true)
    .where('isInit', '==', false)
    .orderBy('order')
    .get()

  const creditCategories = querySnapshot.docs.map((documentSnapshot) => {
    return {
      ...documentSnapshot.data(),
      id: documentSnapshot.id
    }
  })

  return creditCategories
}

export const getInitCategories = async () => {
  const querySnapshot = await firestore()
    .collection('categories')
    .where('isInit', '==', true)
    .get()

  return { ...querySnapshot.docs[0].data(), id: querySnapshot.docs[0].id }
}