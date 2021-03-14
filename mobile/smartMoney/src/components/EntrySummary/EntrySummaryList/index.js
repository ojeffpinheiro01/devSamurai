import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const EntrySummaryList = ({ entriesGrouped }) => {
  return (
    <View>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => <Text style={styles.entry}>
            - {item.description}- ${item.amount} </Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
});

export default EntrySummaryList;
