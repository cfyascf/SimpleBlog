import mongoose from "mongoose"

const User = mongoose.model('UserData', {
    name: String,
    lastname: String,
    email: String,
    password: String,
    birth_date: Date
})

export default User