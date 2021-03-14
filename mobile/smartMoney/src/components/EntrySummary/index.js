import React from 'react';
import {View, StyleSheet} from 'react-native';

import EntrySummaryChart from './EntrySummaryChart';
import EntrySummaryList from './EntrySummaryList';

const EntrySummary = ({ entriesGrouped }) => {
  return (
    <View style={styles.container}>
      <EntrySummaryChart />
      <EntrySummaryList entriesGrouped={entriesGrouped} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EntrySummary;
