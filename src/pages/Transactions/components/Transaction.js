import React, { useContext, useRef } from 'react';
import { TransactionContext } from '../../../contexts/TransactionContext';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { layout, text } from '../../../components/Styles';

export default function Transaction({ transaction }) {

    const swipeableRef = useRef(null);
    const { prepareToDeleteTransaction, categoryList } = useContext(TransactionContext);

    return (
        <Swipeable
            ref={swipeableRef}
            renderRightActions={() => <TouchableOpacity style={styles.danger}
                onPress={() => { swipeableRef.current.close(); prepareToDeleteTransaction(transaction.id) }}
            >
                <MaterialCommunityIcons name="delete-empty-outline" size={28} color="#EE315E" />
            </TouchableOpacity>}>
            <View style={[styles.transaction, layout.flexRow, layout.grayBackground]}>
                <View style={styles.category}>{categoryList[transaction.categoryIcon].icon}</View>
                <View style={styles.description}>
                    <Text numberOfLines={1} style={{ fontSize: 18 }}>{transaction.description}</Text>
                    <Text numberOfLines={1} style={text.grayText}>{transaction.category}</Text>
                </View>
                <Text numberOfLines={1}
                    style={[styles.amount, transaction.type === 'Income' ? text.greenText : '']}>
                    {transaction.type === 'Income' ? '+' : '-'} {transaction.amount}
                </Text>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    transaction: {
        justifyContent: 'space-around',
        alignItems: 'center',
        marginVertical: 5,
        paddingVertical: 5,
        borderBottomColor: '#F0E8E3',
        borderBottomWidth: .3
    },
    category: {
        width: '12%',
        padding: 10,
        backgroundColor: '#ebebeb',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    description: {
        width: '70%',
        paddingLeft: 10
    },
    amount: {
        width: '20%',
        textAlign: 'center'
    },
    danger: {
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        height: 40,
    }
})