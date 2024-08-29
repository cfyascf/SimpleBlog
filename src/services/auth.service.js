import User from "../models/user.model.js"
import 'dotenv/config'
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import bcrypt from 'bcryptjs'

export const authenticateService = async (payload) => {
    const user = await User.findOne({ email: payload.email })
    if(user == null) {
        throw new Error('Invalid credentials.')
    }

    if(!bcrypt.compare(payload.password, user.password)) {
        throw new Error('Invalid credentials.')
    }
    
    const token = sign(
        {
            userid: user.id
        },
        process.env.SECRET,
        {
            expiresIn: process.env.EXPIRES_IN     
        }
    )

    return token
}