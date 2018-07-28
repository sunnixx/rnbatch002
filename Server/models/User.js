const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema of Database
let UserSchema = new Schema({
    username : {type:String, unique: true, lowercase: true},
    department: {type:String, lowercase: true, default: 'software'},
    password: {type:String},
    profile: {
        name: {type:String, lowercase: true, default:'john doe'},
        phone: {type:String, lowercase:true, default: '123-123'},
        email: {type:String, lowercase: true, default: 'example@example.com'}
    }
});

module.exports = mongoose.model('User',UserSchema);