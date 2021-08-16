import React from 'react';
import { View, StyleSheet } from 'react-native';
import { layout } from '../../components/Styles';
import Balance from './components/Balance';
import Summary from './components/Summary';
import Recents from './components/Recents';

export default function HomeScreen() {

    return (
        <View style={[layout.grayBackground, layout.flex, styles.home]}>
            <Balance />
            <Summary />
            <Recents />
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        paddingHorizontal: 10,
        paddingVertical: 40,
    },
});