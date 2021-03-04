const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.jwtSecret);
    return token;
}

const User = mongoose.model('Users', userSchema)

exports.User = User