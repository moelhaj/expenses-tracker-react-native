import React, { useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import Transaction from '../../Transactions/components/Transaction';
import { Text, StyleSheet } from 'react-native';

export default function Recents() {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            {transactions.length > 0 && <Text style={{ fontWeight: '700' }}>Recent Activity</Text>}
            {transactions.length > 0 && transactions.slice(0, 5).map((transaction, index) => (
                <Transaction key={index} transaction={transaction} />
            ))}
            {transactions.length <= 0 && <Text style={{ fontWeight: '700' }}>No Activity</Text>}
        </>
    );
}

const styles = StyleSheet.create({
    boldText: {
        paddingVertical: 20,
        borderRadius: 5,
    },
});