import React from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';

const toastConfig = {
    error: ({ text1, text2, ...rest }) => (
        <BaseToast
            {...rest}
            style={{ borderLeftColor: 'rgba(0,0,0,0)' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 20,
                fontWeight: 'bold'
            }}
            text2Style={{
                fontSize: 15,
            }}
            text1={text1}
            text2={text2}
        />
    ),
    info: ({ text1, ...rest }) => (
        <BaseToast
            {...rest}
            style={{ borderLeftColor: 'rgba(0,0,0,0)' }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 20,
                fontWeight: 'bold'
            }}
            text1={text1}
            text2={null}
        />
    )
};

export const SnackBar = () => {
    return <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
}

export const Snack = (title, details, type) => {
    Toast.show({
        text1: title,
        text2: details,
        visibilityTime: 1000,
        type,
    });
}