import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Main = ({navigation}) => {
  const currentBalance = 2064.35;

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={currentBalance} />
      <Button
        title="Adicionar"
        onPress={() => navigation.navigate('NewEntry')}
      />
      <EntrySummary />
      <EntryList />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
});
export default Main;
