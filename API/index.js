import {AsyncStorage} from 'react-native';

const app = {};

app.sendData = async function(data) {
    await fetch('http://10.0.3.2:3000/signup',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        "username" : data.username,
        "password" : data.password
      })
    }).then(response => {
      response.json().then(message => alert(message.msg));
    }).catch(err => {throw err})
}

app.login = async function(data) {
    await fetch('http://10.0.3.2:3000/login',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            "username" : data.username,
            "password" : data.password
        })
    }).then(response => {
        response.json().then(message => {
            if(message.isLogged === false) {
                alert(message.msg);
                return;
            } else if(message.isLogged === true){
                AsyncStorage.setItem('@key:user',JSON.stringify(message.user));
                return;
            }
        })
    }).catch(err => {throw err})
}

export default app;