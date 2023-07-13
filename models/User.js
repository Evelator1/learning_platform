const { Binary } = require('bson');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    default: ""
  },
  isAdmin:{
    type:Boolean,
    default:false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;