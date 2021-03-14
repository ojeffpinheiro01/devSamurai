import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../../styles/colors';

const BalanceLabel = () => {
  const currentBalance = 2064.35
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <LinearGradient 
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <Text style={styles.value}>{currentBalance}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 15,
    color: Colors.white,
  },
  panel: {
    borderRadius: 10,
    minWidth: 200,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  }
});

export default BalanceLabel;
