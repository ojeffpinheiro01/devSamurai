import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'

import { Container } from '../Core/Container'
import EntryListItem from './EntryListItem'

import { getEntries } from '../../services/Entries'

const EntryList = ({ days = 7, onEntryPress, onPressActionButton }) => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries(days)
      setEntries(data)
    }
    loadEntries()
  }, [days])

  return (
    <Container
      title='Últimos Lançamentos'
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText='Ver mais'
      onPressActionButton={onPressActionButton} >
      <FlatList
        data={entries}
        keyExtractor={ item => item.id }
        renderItem={({ item, index }) => (
          <EntryListItem 
            entry={item} 
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={onEntryPress} />
        )}
      />
    </Container>
  )
}

export default EntryList