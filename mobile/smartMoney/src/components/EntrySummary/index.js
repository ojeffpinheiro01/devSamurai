import React from 'react'
import { StyleSheet, View } from 'react-native'

import useBalanceSumByCategory from '../../hooks/useBalanceSumByCategory'

import { Container } from '../Core/Container'
import EntrySummaryChart from './EntrySummaryChart'
import EntrySummaryList from './EntrySummaryList'

const EntrySummary = ({days = 7, onPressActionButton }) => {
  const [balanceSum] = useBalanceSumByCategory(days)

  return (
    <Container
      title='Categorias'
      actionLabelText={`Últimos ${days} dias`}
      actionButtonText='Ver mais'
      onPressActionButton={onPressActionButton} >
      <View style={styles.content}>
        <EntrySummaryChart data={balanceSum} />
        <EntrySummaryList data={balanceSum} />
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
