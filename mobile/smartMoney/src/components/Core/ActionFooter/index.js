import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import Colors from '../../../styles/colors';

const ActionFooter = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>{children}</View>
    </View>
  );
};

export const ActionPrimaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export const ActionSecondaryButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.secondaryButton} onPress={onPress}>
      <Text style={styles.secondaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingVertical: 10,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryButton: {
    borderRadius: 150,
    borderWidth: 1,
    borderColor: Colors.green,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  primaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.green,
  },
  secondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  secondaryButtonText: {
    fontSize: 18,
    textAlign: 'center',
    color: Colors.white,
  },
});

export default ActionFooter;