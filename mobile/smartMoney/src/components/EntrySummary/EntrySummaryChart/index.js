import React from 'react'
import { View, StyleSheet } from 'react-native'
import { PieChart } from 'react-native-svg-charts'

import Colors from '../../../styles/colors'

const EntrySummaryChart = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53]
  const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7);

  const chartData = data
    .filter(value => value >0)
    .map((value, index) => ({
      key: `pie-${index}`,
      value,
      svg: {
        fill: randomColor()
      }
    }))
  return (
    <View style={styles.container}>
      <PieChart style={styles.chart} data={chartData} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  chart: {
    height: 100,
    width: 100,
    marginRight: 10,
  }
})

export default EntrySummaryChart
