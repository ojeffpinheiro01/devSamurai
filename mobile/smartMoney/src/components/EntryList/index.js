import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';

import EntryListItem from './EntryListItem';

import { getEntries } from '../../services/Entries'

const EntryList = ({ navigation }) => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    async function loadEntries() {
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
        renderItem={({ item }) => (
          <View>
            <Text style={styles.entry}>- {item.description}- ${item.amount} </Text>
            <Button title={item.id}
              onPress={() => {
                navigation.navigate('NewEntry', {entry: item})
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default EntryList;