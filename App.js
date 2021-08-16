import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import GlobalProvider from "./src/contexts/GlobalContext";
import TranscationProvider from './src/contexts/TransactionContext';
import Tabs from './src/pages';

export default function App() {
  return (
    <GlobalProvider>
      <TranscationProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </TranscationProvider>
    </GlobalProvider>
  );
}