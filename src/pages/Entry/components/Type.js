import React, { useContext } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { TransactionContext } from '../../../contexts/TransactionContext';
import { text } from '../../../components/Styles';

export default function Type() {

    const context = useContext(TransactionContext);

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: .85 }} onPress={() => context.setType('Expense')}>
                <View style={[styles.typeBox, context.type === 'Expense' ? styles.typeBorder : '']}>
                    <Text style={[context.type === 'Expense' ? '' : text.grayText, { fontSize: 20, fontWeight: '700' }]}>
                        Expenses
                    </Text>
                </View>
            </TouchableOpacity>
            <View style={{ flex: .1 }}></View>
            <TouchableOpacity style={{ flex: .85 }} onPress={() => context.setType('Income')}>
                <View style={[styles.typeBox, context.type === 'Income' ? styles.typeBorder : '']}>
                    <Text style={[context.type === 'Income' ? '' : text.grayText, { fontSize: 20, fontWeight: '700' }]}>
                        Income
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    typeBox: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginVertical: 10,
        height: 70,
        width: '100%',
        backgroundColor: '#ffffff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.11,
        shadowRadius: 1.22,
        elevation: 3,
        borderRadius: 5,
    },
    typeBorder: {
        borderWidth: 3,
        borderColor: '#02060D',
    },
})