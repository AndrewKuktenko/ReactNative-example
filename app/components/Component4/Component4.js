
import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry,
    ListView,
    StyleSheet
} from 'react-native';

const users = [
    {name: 'John Doe'},
    {name: 'Jim Carry'},
    {name: 'Steve Cook'},
    {name: 'Michel Richards'},
];



export default class Component4 extends Component {
    constructor()
    {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds.cloneWithRows(users),
        };
    }

    renderRow(user)
    {
        return(
            <View style={styles.row}>
                <Text style={styles.rowText}>{user.name}</Text>
            </View>
            )
    }

    render() {
        return(
            <ListView
                dataSource={this.state.userDataSource}
                renderRow={this.renderRow.bind(this)}
            />
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

AppRegistry.registerComponent('Component4', () => Component4);
