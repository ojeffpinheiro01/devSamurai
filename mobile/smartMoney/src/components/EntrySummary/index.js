import React from 'react'
import { StyleSheet, View } from 'react-native'

import { Container } from '../Core/Container'
import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryList from './EntrySummaryList'

const EntrySummary = ({days = 7, onPressActionButton }) => {
  const entriesGrouped = [
    { key: '1', description: 'Alimentação', amount: 201 },
    { key: '2', description: 'Combustível', amount: 12 },
    { key: '3', description: 'Aluguel', amount: 120 },
    { key: '4', description: 'Lazer', amount: 250 },
    { key: '5', description: 'Outros', amount: 1200 }
  ]

  return (
    <Container
      title='Categorias'
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText='Ver mais'
      onPressActionButton={onPressActionButton} >
      <View style={styles.content}>
        <EntrySummaryChart />
        <EntrySummaryList entriesGrouped={entriesGrouped} />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    paddingVertical: 10
  }
})

export default EntrySummary
