import React from 'react';
import {  Text, View, Button, AppRegistry } from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat',{ user: 'Sanya' })}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);