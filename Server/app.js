const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); //Database interaction package

const User = require('./models/User');

const app = express();

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Connect to database 

mongoose.connect('mongodb://dbuser:helloworld1234@ds163711.mlab.com:63711/gettingstarteddb',
{useNewUrlParser: true},(err) => {
    if(err) throw err; 

    console.log("Database connected");
});

app.post('/login',(request,response,done) => {
    let username = request.body.username;
    let password = request.body.password;

    console.log(username + " " + password);

    User.find({"username" : username,"password" : password},(err,user) => {
        if(user.length <= 0) {
            response.json({isLogged: false, "msg" : "user not found"})
        } else {
            response.json({user:user, isLogged: true});
        }

        if(err) {
            return done(err);
        }


    })
})

app.post('/signup',(request,response,done) => {
    let username = request.body.username;
    let password = request.body.password;

    let user = new User();

    user.username = username;
    user.password = password;

    user.save((err) => {
        if(err) return done(err);

        response.send({"msg" : "data has been saved"});
    })

})


app.listen(3000,(err) => {
    if(err) throw err;

    console.log("Server connected to http://localhost:3000");
})