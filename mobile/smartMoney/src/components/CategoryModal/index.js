import React, { useEffect, useState } from 'react'
import { View, Text, Modal, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import ActionFooter, { ActionPrimaryButton } from '../../components/Core/ActionFooter'
import { getAllCategories, getDebitCategories, getCreditCategories } from '../../services/Categories'

import Colors from '../../styles/colors'

const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {
    const [debitCategories, setDebitCategories] = useState([])
    const [creditCategories, setCreditCategories] = useState([])
    const [allCategories, setAllCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            setDebitCategories(await getDebitCategories())
            setCreditCategories(await getCreditCategories())
            setAllCategories(await getAllCategories())
        }
        loadCategories()
    }, [])

    return (
        <View>
            <Modal
                animationType="slide" transparent={false} visible={isVisible}>
                <View style={styles.modal}>
                    <FlatList
                        data={
                            categoryType === 'all'
                                ? allCategories
                                : categoryType === 'debit'
                                    ? debitCategories
                                    : creditCategories
                        }
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.modalButton} onPress={() => { onConfirm(item) }}>
                                <Text
                                    style={[styles.modalButtonText, { color: item.color }]}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )} />

                    <ActionFooter>
                        <ActionPrimaryButton
                            title='FECHAR' onPress={onCancel} />
                    </ActionFooter>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Colors.background
    },
    modalButton: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20
    },
    modalButtonText: {
        fontSize: 22,
        color: Colors.white,
        textAlign: 'center',
    }
})

export default CategoryModal