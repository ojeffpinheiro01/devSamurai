import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/colors'

const Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry') } />
      <EntrySummary />
      <EntryList navigation={ navigation } />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
});
export default Main;
