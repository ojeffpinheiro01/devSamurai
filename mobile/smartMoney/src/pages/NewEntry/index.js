import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import NewEntryInput from './NewEntryInput'
import NewEntryCategoryPicker from './NewEntryCategoryPicker'

import Colors from '../../styles/colors'

import { saveEntry, delEntry } from '../../services/Entries'

const NewEntry = ({ navigation }) => {
  const currentEntry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    category: {id: null, name: 'Selecione'},
    entryAt: new Date()
  })

  const [debit, setDebit] = useState(currentEntry.amount <=0)
  const [amount, setAmount] = useState(currentEntry.amount)
  const [category, setCategory] = useState(currentEntry.category)

  const isValid = () => {
    if(parseFloat(amount) !== '0'){
      return true
    }
    return false
  }

  const onSave = () => {
    const value = { 
      amount: parseFloat(amount),
      category:   category
  }
    saveEntry(value, currentEntry)
    console.log('NewEntry :: save', amount)
    onClose()
  }

  const onDel = () => {
    delEntry(currentEntry)
    onClose()
  }

  const onClose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View>
        <NewEntryInput 
          value={amount} onChangeValue={setAmount} onChangeDebit={setDebit} />
        <NewEntryCategoryPicker 
          debit={debit} category={category} onChangeCategory={setCategory} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={() => {
          isValid() && onSave()
        }} />
        <Button title="Excluir" onPress={ onDel } />
        <Button title="Cancelar" onPress={ onClose } />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 20,
  },
  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  }
});

export default NewEntry;
