const mongoose = require('mongoose')

const User = mongoose.model('UserData', {
    name: String,
    lastname: String,
    salary: Number
})

module.exports = User;