import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Container } from '../Core/Container'
import EntryListItem from './EntryListItem';

import { getEntries } from '../../services/Entries'

const EntryList = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries()
      setEntries(data)
    }
    loadEntries()
  }, [])

  return (
    <Container
      title='Últimos Lançamentos'
      actionLabelText='Últimos 7 dias'
      actionButtonText='Ver mais'
      onPressActionButton={() => { }} >
      <FlatList
        data={entries}
        keyExtractor={ item => item.id }
        renderItem={({ item }) => (
          <View>
            <Text style={styles.entry}>
              - {item.description}- ${item.amount}
            </Text>
          </View>
        )}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
});

export default EntryList;