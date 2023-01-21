const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:String,
    password:String
});

const userModel = mongoose.model('instaUser',UserSchema)

module.exports = userModel;