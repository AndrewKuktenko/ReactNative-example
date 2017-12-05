
import React, { Component } from 'react';
import {
    Text,
    View,
    AppRegistry,
    ListView,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

export default class Component5 extends Component {
    constructor()
    {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            userDataSource: ds,
        };
    }

    static navigationOptions = {
        title: 'User List',
    };

    componentDidMount()
    {
        this.fetchUsers();
    }

    fetchUsers() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                this.setState({
                    userDataSource: this.state.userDataSource.cloneWithRows(response),
                });
            });
    }

    renderRow(user)
    {
        const { navigate } = this.props.navigation;
        return(
            <TouchableHighlight onPress={() => navigate('UserDetails', {user: user})}>
                <View style={styles.row}>
                    <Text style={styles.rowText}>{user.name}: {user.email}</Text>
                </View>
            </TouchableHighlight>
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

AppRegistry.registerComponent('Component5', () => Component5);

