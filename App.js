import React, {Component} from 'react';
import {View,Text,TouchableOpacity,TextInput} from 'react-native';

import app from './API';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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
  }

  render() {
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

export default App;