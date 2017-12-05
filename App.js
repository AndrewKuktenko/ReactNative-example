import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './app/components/ChatComponent/ChatScreen'
import HomeScreen from './app/components/HomeScreen/HomeScreen'
import Component5 from './app/components/Component5/Component5'
import Component6 from './app/components/Component6/Component6'


export const SimpleApp = StackNavigator({
    UserList: { screen: Component5 },
    UserDetails: { screen: Component6 },
    Home: { screen: HomeScreen },
    Chat: { screen: ChatScreen },
});

export default class App extends React.Component {
    render() {
        return <SimpleApp />;
    }
}
