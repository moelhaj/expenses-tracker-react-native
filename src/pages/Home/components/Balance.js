import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { View, StyleSheet, Text } from 'react-native';
import { text } from '../../../components/Styles';

export default function Balance() {

    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const { transactions } = useContext(GlobalContext);

    useEffect(() => {
        setIncome(transactions.filter(t => t.type === "Income").reduce((acc, t) => (acc += t.amount), 0));
        setExpenses(transactions.filter(t => t.type === "Expense").reduce((acc, t) => (acc += t.amount), 0))
    }, [transactions])

    return (
        <View style={styles.balance}>
            <View>
                <Text style={[text.grayText, { fontSize: 18 }]}>Current Balance</Text>
                <Text style={{ fontSize: 50, fontWeight: '700' }}>{parseFloat(income - expenses).toFixed(2)}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    balance: {
        paddingVertical: 20,
        borderRadius: 5,
    },
});