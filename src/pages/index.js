import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './Home';
import Entry from './Entry';
import Transactions from './Transactions';
import { layout } from '../components/Styles';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    elevation: 0,
                    backgroundColor: '#ebebeb',
                    height: 50,
                    borderTopColor: '#ebebeb',
                }
            }}>
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={layout.center}>
                        <MaterialCommunityIcons name="home-outline" size={focused ? 35 : 30} color={focused ? '#EE315E' : '#3f3f41'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Entry" component={Entry} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={layout.center}>
                        <MaterialCommunityIcons name="plus" size={focused ? 35 : 30} color={focused ? '#EE315E' : '#3f3f41'} />
                    </View>
                )
            }} />
            <Tab.Screen name="Transactions" component={Transactions} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={layout.center}>
                        <MaterialCommunityIcons name="format-list-bulleted" size={focused ? 35 : 30} color={focused ? '#EE315E' : '#3f3f41'} />
                    </View>
                )
            }} />
        </ Tab.Navigator>
    );
}