import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BalancePanelLabel = ({ currentBalance }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo atual</Text>
      <Text style={styles.value}>{ currentBalance }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 22,
  },
});

export default BalancePanelLabel;
