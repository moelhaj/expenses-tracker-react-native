import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../../../contexts/GlobalContext';
import { View, StyleSheet, Text } from 'react-native';
import { layout, text } from '../../../components/Styles';

export default function Summary() {

    const { transactions } = useContext(GlobalContext);
    const [income, setIncome] = useState(0);
    const [expenses, setExpenses] = useState(0);
    const [incomeWidth, setIncomeWidth] = useState();
    const [expenseWidth, setExpenseWidth] = useState();

    useEffect(() => {
        setIncome(transactions.filter(t => t.type === "Income").reduce((acc, t) => (acc += t.amount), 0));
        setExpenses(transactions.filter(t => t.type === "Expense").reduce((acc, t) => (acc += t.amount), 0))
    }, [transactions]);

    useEffect(() => {
        setIncomeWidth(parseInt(income) / (parseInt(income) + parseInt(expenses)) * 100);
        setExpenseWidth(parseInt(expenses) / (parseInt(income) + parseInt(expenses)) * 100);
    }, [income, expenses])

    return (
        <View style={styles.summary}>

            <View style={{ paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={text.grayText}>Income</Text>
                    <Text style={{ fontSize: 28, fontWeight: '700' }}>{parseFloat(income).toFixed(2)}</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={text.grayText}>Expenses</Text>
                    <Text style={{ fontSize: 28, fontWeight: '700' }}>{parseFloat(expenses).toFixed(2)}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 30 }}>
                <View style={[styles.incomeBar, layout.greenBackground, { width: `${incomeWidth}%` }]}></View>
                <View style={[styles.expenseBar, layout.redBackground, { width: `${expenseWidth}%` }]}></View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    summary: {
        marginBottom: 10,
    },
    incomeBar: {
        height: 5,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
    },
    expenseBar: {
        height: 5,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    }
});