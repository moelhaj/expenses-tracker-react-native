import React, { createContext, useState, useContext } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { GlobalContext } from './GlobalContext';
import { Snack } from "../components/SnackBar";
import { Keyboard, Alert } from 'react-native';
import uuid from 'react-native-uuid';

export const TransactionContext = createContext();

export default ({ children }) => {

    const { addTransaction, deleteTransaction } = useContext(GlobalContext);

    const [amount, setAmount] = useState('');
    const [type, setType] = useState('Expense');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Category');
    const [categoryIcon, setCategoryIcon] = useState(null);
    const [modalVisible, setModalVisible] = useState(null);



    const categoryList = [
        { name: 'Travel', icon: <MaterialCommunityIcons name="wallet-travel" size={22} color="#33404F" /> },
        { name: 'Sport', icon: <MaterialCommunityIcons name="run" size={22} color="#33404F" /> },
        { name: 'Health', icon: <MaterialCommunityIcons name="pill" size={22} color="#33404F" /> },
        { name: 'Grocery', icon: <MaterialCommunityIcons name="shopping-outline" size={22} color="#33404F" /> },
        { name: 'Bills', icon: <MaterialCommunityIcons name="file-document-outline" size={22} color="#33404F" /> },
        { name: 'Housing', icon: <MaterialCommunityIcons name="home-city-outline" size={22} color="#33404F" /> },
        { name: 'Others', icon: <MaterialCommunityIcons name="view-grid-outline" size={22} color="#33404F" /> }
    ];

    const prepareToAddTransaction = () => {
        if (amount === '' || amount === 0 || description === '' || category === 'Category') return Snack('Missing data', 'All fields are required', 'error');
        addTransaction({ id: uuid.v4(), amount: parseFloat(amount), type, category, categoryIcon, description, date: Date.now() });
        setDescription('');
        setAmount('');
        setType('Expense');
        setCategory('Category');
        setModalVisible(null);
        Keyboard.dismiss();
    }

    const prepareToDeleteTransaction = (id) => {
        Alert.alert(
            "Delete Transaction",
            "This transaction will be permanently deleted",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteTransaction(id) }
            ]
        );
    }

    return <TransactionContext.Provider value={{
        amount, setAmount,
        type, setType,
        description, setDescription,
        category, setCategory,
        categoryIcon, setCategoryIcon,
        modalVisible, setModalVisible,
        categoryList,
        prepareToAddTransaction,
        prepareToDeleteTransaction
    }}>
        {children}
    </TransactionContext.Provider>;
}