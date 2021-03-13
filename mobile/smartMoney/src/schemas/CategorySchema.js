const CategorySchema = {
  name: 'Category',
  primaryKey: 'id',
  properties: {
    id: 'string',
    name: 'string',
    color: {type: 'string', default: '#fff'},
    isInit: {type: 'bool', default: false},
    isDefault: {type: 'bool', default: false},
    isCredit: {type: 'bool', default: false},
    isDebit: {type: 'bool', default: false},
    order: {type: 'int', default: 0},
    entries: 'Entry[]',
  },
};
export default CategorySchema;