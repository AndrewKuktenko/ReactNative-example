
import React, { Component } from 'react';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import {
    Navigator,
    View
} from 'react-native';
import Component5 from './app/components/Component5/Component5'
import Component6 from './app/components/Component6/Component6'

export default class myapp extends Component {
    renderScene(route, navigator)
    {
        switch(route.id) {
            case 'component5':
                return (<Component5 navigator={navigator} title={"component5"}/>)
            case 'component6':
                return (<Component6 navigator={navigator} title={"component6"}/>)
        }
    }

    render() {
        return(
            <NavigationExperimental.Navigator
                initialRoute={{id: 'component5'}}
                renderScene={this.renderScene}
                configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
            />
        )
    }
}
