import React, { useState } from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

import ActionFooter, { ActionPrimaryButton, ActionSecondaryButton } from '../../components/Core/ActionFooter'
import BalanceLabel from '../../components/BalanceLabel'

import NewEntryInput from './NewEntryInput'
import NewEntryCategoryPicker from './NewEntryCategoryPicker'
import NewEntryDatePicker from './NewEntryDatePicker'
import NewEntryCameraPicker from './NewEntryCameraPicker'
import NewEntryAddressPicker from './NewEntryAddressPicker'
import NewEntryDeleteAction from './NewEntryDeleteAction'

import useEntries from '../../hooks/useEntries'

import Colors from '../../styles/colors'

const NewEntry = ({ route, navigation }) => {
  const currentEntry = route.params?.entry
    ? route.params.entry
    : {
        id: null,
        amount: 0,
        // entryAt: new Date(),
        photo: null,
        address: null,
        latitude: null,
        longitude: null,
        category: {id: null, name: 'Selecione'}
      }

  const [_, saveEntry, delEntry] = useEntries()

  const [debit, setDebit] = useState(currentEntry.amount <= 0)
  const [amount, setAmount] = useState(currentEntry.amount)
  const [category, setCategory] = useState(currentEntry.category)
  const [entryAt, setEntryAt] = useState(
    currentEntry.entryAt ? new Date(currentEntry.entryAt) : new Date(),
  )
  const [photo, setPhoto] = useState(currentEntry.photo)
  const [address, setAddress] = useState(currentEntry.address)
  const [latitude, setLatitude] = useState(currentEntry.latitude)
  const [longitude, setLongitude] = useState(currentEntry.longitude)

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true
    }
    return false
  }

  const onSave = () => {
    const data = {
      id: currentEntry.id,
      amount: parseFloat(amount),
      photo: photo,
      category: category,
      address: address,
      latitude: latitude,
      longitude: longitude,
      entryAt: entryAt
    }
    saveEntry(data)
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
      <StatusBar
        barStyle="light-content" backgroundColor={Colors.background} />
      <BalanceLabel />

      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount} onChangeDebit={setDebit} onChangeValue={setAmount} />
        <NewEntryCategoryPicker
          debit={debit} category={category} onChangeCategory={setCategory} />

        <View style={styles.formActionContainer}>
          <NewEntryDatePicker
            value={entryAt} onChange={setEntryAt} />
          <NewEntryCameraPicker 
            photo={photo} onChangePhoto={setPhoto} />
          <NewEntryAddressPicker 
            address={address} 
            onChange={({latitude, longitude, address}) => {
              setLatitude(latitude)
              setLongitude(longitude)
              setAddress(address)
            }} />
          <NewEntryDeleteAction 
            entry={currentEntry} onOkPress={onDel} />
        </View>

      </View>
      <View>
        <ActionFooter>
          <ActionPrimaryButton 
            title={currentEntry.id ? 'Atualizar' : 'Salvar'} 
            onPress={() => { isValid() && onSave() }} />
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
