import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BarChart, Grid } from 'react-native-svg-charts'

const BalancePanelChart = () => {
    const data = [100, 80, -30, 120, 10, 35, 70]
    return (
        <View style={styles.container}>
            <BarChart
                style={styles.chart} 
                data={data}
                svg={{ 
                    fill: 'rgba(0,0,0,.1)', 
                    stroke: 'rgba(0,0,0,.1)', 
                    strokeWidth: 1 }}
                contentInset={{ top: 0, bottom: 0 }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        marginTop: -20,
        marginBottom: 3
    },
    chart: {
        height: 60,
    }
})

export default BalancePanelChart
