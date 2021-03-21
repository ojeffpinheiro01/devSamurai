import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Svg, { Circle } from 'react-native-svg'

import Colors from '../../../../styles/colors'

const EntrySummaryListItem = ({ entry }) => {
  const bulletColor = entry.category.color || Colors.white

  return (
    <View style={styles.container}>
      <Svg height="20" width="22">
        <Circle
          cx="10"
          cy="10"
          r="8"
          stroke={Colors.background}
          strokeWidth="0.5"
          fill={bulletColor}
        />
      </Svg>
      <Text style={styles.name}>{entry.category.name}</Text>
      <Text style={styles.value}>{entry.amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  name: {
    fontSize: 12,
    color: Colors.white,
    marginTop: 2,
  },
  value: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
    textAlign: 'right',
    marginTop: 2
  }
})

export default EntrySummaryListItem