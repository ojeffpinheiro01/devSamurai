import { getUUID } from './uuid';
import { getRealm } from './Realm';

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
  const realm = await getRealm()
  return realm.objects('Category').sorted('order')
}

export const getDebitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isDebit = true AND isInit = false')
    .sorted('order');
};

export const getCreditCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isCredit = true AND isInit = false')
    .sorted('order');
};

export const getInitCategories = async () => {
  const realm = await getRealm();
  return realm
    .objects('Category')
    .filtered('isInit = true')
    .sorted('order')
};