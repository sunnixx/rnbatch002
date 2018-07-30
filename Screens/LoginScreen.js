import React, {Component} from 'react';
import {View,Text,TouchableOpacity,TextInput,AsyncStorage} from 'react-native';

import app from '../API';

class LoginScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {refresh: false};

    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.checkLogin = this.checkLogin.bind(this);
  }

  handleSignup() {
    app.sendData({
      "username" : this.username,
      "password" : this.password
    });  
  }

  handleLogin() {

    app.login({
      "username" : this.username,
      "password" : this.password
    })

    this.setState({refresh: true});

  }

  checkLogin() {
    const { navigate } = this.props.navigation;

    AsyncStorage.getItem('@key:user').then(response => {

      if(response !== null) {
        navigate('DashboardScreen');
      }
    });
  }

  render() {

    setTimeout(() => {
      this.checkLogin();
    },1000);

    return (
      <View style={{height: '100%'}}>
        <Text style={{fontSize:30,marginTop:30}}>SIGNUP </Text>

        <TextInput 
          placeholder="Enter username"
          onChangeText={(e) => {this.username = e}}
        />
        <TextInput 
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(e) => {this.password = e}}
        />

        <TouchableOpacity
          onPress={this.handleSignup}
        >
          <Text>Signup</Text>
        </TouchableOpacity>

        <Text style={{fontSize:30,marginTop:30}}>LOGIN </Text>

        <TextInput 
          placeholder="Enter username"
          onChangeText={(e) => {this.username = e}}
        />
        <TextInput 
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(e) => {this.password = e}}
        />

        <TouchableOpacity
          onPress={this.handleLogin}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LoginScreen;