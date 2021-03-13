import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';

import { saveEntry } from '../../services/Entries'

const NewEntry = ({ navigation }) => {
  const [amount, setAmount] = useState(0)

  const currentBalance = 2064.35

  const save = () => {
    const value ={ amount: parseFloat(amount) }
    saveEntry(value)
    console.log('NewEntry :: save', amount)
  }

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput
          placeholder='Valor'
          style={styles.input}
          onChangeText={(t) => setAmount(t) }
          value={ amount } />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={ save } />
        <Button title="Cancelar" onPress={ () => navigation.goBack() } />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
  },
});

export default NewEntry;
