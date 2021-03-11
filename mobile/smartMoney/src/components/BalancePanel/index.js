import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import BalancePanelLabel from './BalancePanelLabel'
import BalancePanelChart from './BalancePanelChart'

const BalancePanel = ({ currentBalance }) => {
    return (
        <View style={styles.container}>
            <BalancePanelLabel currentBalance={currentBalance} />
            <BalancePanelChart />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default BalancePanel
