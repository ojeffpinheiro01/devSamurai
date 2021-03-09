import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

import BalancePanelLabel from './BalancePanelLabel'
import BalancePanelChart from './BalancePanelChart'

const BalancePanel = () => {
    return (
        <View style={styles.container}>
            <BalancePanelLabel />
            <BalancePanelChart />
            <Button title="Adicionar" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default BalancePanel
