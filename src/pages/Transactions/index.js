import React, { useContext } from 'react';
import Transaction from './components/Transaction';
import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import { GlobalContext } from '../../contexts/GlobalContext';
import { text, layout } from '../../components/Styles';

export default function TransactionsScreen() {

    const { transactions } = useContext(GlobalContext);

    return (
        <SafeAreaView style={[layout.flex, layout.grayBackground, styles.container]}>
            <ScrollView style={styles.scrollView}>
                <Text style={text.heading}>Transactions</Text>
                {transactions && transactions.length > 0 && transactions.map((transaction, index) => (
                    <Transaction key={index} transaction={transaction} />
                ))}
                {transactions.length <= 0 && <Text>No Activity</Text>}
                <View style={{ height: 50 }}></View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    scrollView: {
        paddingHorizontal: 10,
        paddingVertical: 40,
        marginBottom: 60
    },
});