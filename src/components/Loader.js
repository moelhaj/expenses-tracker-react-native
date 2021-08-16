import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Loader() {
    return (
        <View style={styles.loader}>
            <Text style={{ color: '#FFFFFF' }}>Loading...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loader: {
        backgroundColor: '#EE315E',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});