import React, { useContext } from 'react';
import { TransactionContext } from '../../contexts/TransactionContext';
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity, View, Text } from 'react-native';
import Type from './components/Type';
import Category from './components/Category';
import Amount from './components/Amount';
import Description from './components/Description';
import { layout, text } from '../../components/Styles';

export default function EntryScreen() {

    const { prepareToAddTransaction } = useContext(TransactionContext);

    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <View style={[layout.grayBackground, layout.flex, layout.center, { padding: 10 }]}>
                    <Type />
                    <Category />
                    <Amount />
                    <Description />
                    <TouchableOpacity
                        onPress={() => { prepareToAddTransaction(); Keyboard.dismiss() }}
                        style={[layout.btn, { backgroundColor: '#02060D', marginTop: 20, width: 120 }]}>
                        <Text style={[text.whiteText, { fontSize: 20 }]}>Add</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback >
    );
}