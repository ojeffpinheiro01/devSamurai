import React from 'react'
import { Text } from 'react-native'
import NumberFormat from 'react-number-format'

const Currency = ({value}) => {
  return (
    <NumberFormat
      value={parseFloat(value)}
      displayType={'text'}
      thousandSeparator={'.'}
      decimalSeparator={','}
      fixedDecimalScale={true}
      decimalScale={2}
      prefix={'R$ '}
      renderText={(item) => <Text>{item}</Text>}
    />
  )
}

export default Currency