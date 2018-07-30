import React, {Component} from 'react';
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native';

class DashboardScreen extends Component {

    constructor(props) {
        super(props);

        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        const { navigate } = this.props.navigation;

        if(AsyncStorage.getItem('@key:user') !== null) {
            AsyncStorage.removeItem('@key:user').then(() => {
                navigate('LoginScreen');
            })
        }
    }

    render() {
        return (
            <View>
                <Text style={{fontSize:30}}>WELCOME TO DASHBOARD</Text>
                <TouchableOpacity
                    onPress={this.handleLogout}
                >
                    <Text style={{fontSize: 20}}>LOGOUT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DashboardScreen;