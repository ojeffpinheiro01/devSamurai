import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BalanceLabel = ({ currentBalance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>{currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
  },
  value: {
    fontSize: 18,
  },
});

export default BalanceLabel;
