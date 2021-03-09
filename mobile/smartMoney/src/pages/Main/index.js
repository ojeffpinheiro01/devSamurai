import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel'
import EntrySummary from '../../components/EntrySummary'

const Main = () => {
  return (
    <View style={styles.container}>
      <BalancePanel />
      <EntrySummary />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
export default Main;
