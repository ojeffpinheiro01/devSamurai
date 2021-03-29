import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../Core/Container'
import EntryListItem from './EntryListItem'

import useEntries from '../../hooks/useEntries'

const EntryList = ({days = 7, category}) => {
  const navigation = useNavigation()
  const [entries] = useEntries(days, category)

  return (
    <Container
      title='Últimos Lançamentos'
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText='Ver mais'
      onPressActionButton={() => navigation.navigate('Report')} >
      <FlatList
        data={entries}
        keyExtractor={ item => item.id }
        renderItem={({ item, index }) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={(entry) => {
              const entryToJson = JSON.parse(JSON.stringify(entry))
              navigation.navigate('NewEntry', { entry: entryToJson })
            }}/>
        )}
      />
    </Container>
  )
}

export default EntryList