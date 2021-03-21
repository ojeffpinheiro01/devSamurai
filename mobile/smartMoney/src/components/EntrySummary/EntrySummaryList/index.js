import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

import EntrySummaryListItem from './EntrySummaryListItem'

const EntrySummaryList = ({ data }) => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={item => item.category.id}
      renderItem={({ item }) => <EntrySummaryListItem entry={item} />} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default EntrySummaryList
