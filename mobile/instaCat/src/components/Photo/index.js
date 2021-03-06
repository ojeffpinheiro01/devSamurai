import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Photo = () => {
    const [like, setLike] = useState(0);

    const increment = () => {
        setLike(like + 1)
    }
    return (

        <View style={styles.container} >
            <TouchableOpacity onPress={increment}>
                <Text>{like} likes</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 22
    },
    img: {
        height: 250,
        width: 250
    }
})

export default Photo