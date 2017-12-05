import React, { Component } from 'react';
import {
    View,
    Text,
    AppRegistry,
    StyleSheet
} from 'react-native';



export default class Component6 extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.user.name}`,
    });

    render() {
        const { params } = this.props.navigation.state;
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>
                    {params.user.name} - {params.user.email}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        marginBottom: 3,
        backgroundColor: 'blue',
    },
    rowText: {
        color: 'white',
        flex: 1,
    },
});

AppRegistry.registerComponent('Component6', () => Component6);