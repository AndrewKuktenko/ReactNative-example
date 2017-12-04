
import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry,
} from 'react-native';

export default class Component6 extends Component {
    render() {
        return(
            <View>
                <Text>Component 6</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('Component6', () => Component6);

