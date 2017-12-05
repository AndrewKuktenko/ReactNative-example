import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Component5 from '../Component5/Component5';
import Component6 from '../Component6/Component6';

const HomeScreen = ({navigation}) => (
    <Component5 navigation={navigation}/>
);

const DetailsScreen = () => (
    <Component6/>
);

const RootNavigator = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            headerTitle: 'Home',
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: 'Details',
        },
    },
});
export default RootNavigator;

