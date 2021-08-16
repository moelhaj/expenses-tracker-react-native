import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SnackBar, Snack } from '../components/SnackBar';
import Loader from '../components/Loader';

export const GlobalContext = createContext();

export default ({ children }) => {

    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTransaction();
    }, []);

    const getTransaction = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@transactions');
            jsonValue != null ? setTransactions(JSON.parse(jsonValue)) : null;
        } catch (error) {
            Snack('Error', error, 'info');
        }
        setLoading(false);
    }

    const addTransaction = async (transaction) => {
        try {
            let inputValue = JSON.stringify([transaction, ...transactions]);
            await AsyncStorage.setItem('@transactions', inputValue);
            getTransaction();
            Snack('Transaction Added', '', 'info');
        } catch (error) {
            Snack('Somthing Wrong', error, 'info');
        }
    }

    const deleteTransaction = async (id) => {
        let inputValue = JSON.stringify([...transactions.filter(transaction => transaction.id !== id)]);
        try {
            await AsyncStorage.setItem('@transactions', inputValue);
            getTransaction();
            Snack('Transaction Deleted', '', 'info');
        } catch (error) {
            Snack('Somthing Wrong', error, 'info');
        }
    }

    return <>
        {loading ? <Loader /> : <GlobalContext.Provider value={{
            transactions,
            addTransaction,
            deleteTransaction
        }}>
            {children}
            <SnackBar />
        </GlobalContext.Provider>}
    </>;
}