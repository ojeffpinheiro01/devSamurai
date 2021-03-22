import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'

import ActionFooter, { ActionPrimaryButton, ActionSecondaryButton } from '../../components/Core/ActionFooter'
import BalanceLabel from '../../components/BalanceLabel'

import NewEntryInput from './NewEntryInput'
import NewEntryCategoryPicker from './NewEntryCategoryPicker'
import NewEntryDatePicker from './NewEntryDatePicker'
import NewEntryDeleteAction from './NewEntryDeleteAction'
import NewEntryAddressPicker from './NewEntryAddressPicker'

import Colors from '../../styles/colors'

import useEntries from '../../hooks/useEntries'

const NewEntry = ({ navigation }) => {
  const currentEntry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    category: { id: null, name: 'Selecione' },
    address: null,
    latitude: null,
    longitude: null,
    entryAt: new Date()
  })

  const [_, saveEntry, delEntry] = useEntries()

  const [debit, setDebit] = useState(currentEntry.amount <= 0)
  const [amount, setAmount] = useState(currentEntry.amount)
  const [category, setCategory] = useState(currentEntry.category)
  const [entryAt, setEntryAt] = useState(currentEntry.entryAt)
  const [address, setAddress] = useState(currentEntry.address)
  const [latitude, setLatitude] = useState(currentEntry.latitude)
  const [longitude, setLongitude] = useState(currentEntry.longitude)

  const isValid = () => {
    if (parseFloat(amount) !== '0') {
      return true
    }
    return false
  }

  const onSave = () => {
    const value = {
      amount: parseFloat(amount),
      category: category,
      entryAt: entryAt,
      address: address,
      latitude: latitude,
      longitude: longitude
    }
    saveEntry(value, currentEntry)
    onClose()
  }

  const onDel = () => {
    delEntry(currentEntry)
    onClose()
  }

  const onClose = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <BalanceLabel />

      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount} onChangeValue={setAmount} onChangeDebit={setDebit} />
        <NewEntryCategoryPicker
          debit={debit} category={category} onChangeCategory={setCategory} />

        <View style={styles.formActionContainer}>
          <NewEntryDatePicker
            value={entryAt} onChange={setEntryAt} />
          <NewEntryAddressPicker 
            address={address} 
            onChange={({latitude, longitude, address}) => {
              setLatitude(latitude)
              setLongitude(longitude)
              setAddress(address)
            }} />
          <NewEntryDeleteAction entry={currentEntry} onOkPress={onDel} />
        </View>

      </View>
      <View>
        <ActionFooter>
          <ActionPrimaryButton 
            title={currentEntry.id ? 'Atualizar' : 'Salvar'} onPress={() => { isValid() && onSave() }} />
          <ActionSecondaryButton 
            title='Cancelar' onPress={onClose} />
        </ActionFooter>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10
  },
  formContainer: {
    flex: 1,
    paddingVertical: 20
  },
  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  }
})

export default NewEntry
