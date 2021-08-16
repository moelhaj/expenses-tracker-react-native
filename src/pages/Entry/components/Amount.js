import React, { useContext } from 'react';
import { TransactionContext } from '../../../contexts/TransactionContext';
import { TextInput } from 'react-native';
import { layout } from '../../../components/Styles';

export default function Amount() {

    const { amount, setAmount } = useContext(TransactionContext);

    return (
        <>
            <TextInput
                style={[layout.box, layout.input]}
                onChangeText={setAmount}
                value={amount}
                placeholder="Amount"
                keyboardType="numeric"
            />
        </>
    );
}