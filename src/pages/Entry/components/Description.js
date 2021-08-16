import React, { useContext } from 'react';
import { TransactionContext } from '../../../contexts/TransactionContext';
import { TextInput } from 'react-native';
import { layout } from '../../../components/Styles';

export default function Description() {

    const { description, setDescription } = useContext(TransactionContext);

    return (
        <>
            <TextInput
                style={[layout.box, layout.input]}
                onChangeText={setDescription}
                value={description}
                placeholder="Description: Salary, Shopping, ..."
            />
        </>
    );
}