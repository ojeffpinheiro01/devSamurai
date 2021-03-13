import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

import EntryListItem from './EntryListItem';

import { getEntries } from '../../services/Entries'

const EntryList = () => {
  const [entries, setEntries] = useState([])
  
  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntries()
      setEntries(data)
    }
    loadEntries()
  }, [])

  return (
    <View>
      <Text style={styles.title}>Últimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({item}) => (
          <Text style={styles.entry}>- {item.description}- ${item.amount} </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;
