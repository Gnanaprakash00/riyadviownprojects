const mongoose = require('mongoose')

const user = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    }
})

const User = mongoose.model('office', user);
module.exports = User;