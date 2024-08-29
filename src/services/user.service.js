import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const createUserService = async (payload) => {
    const salt = await bcrypt.genSalt(12)
    const passhash = await bcrypt.hash(payload.password, salt)
    payload.password = passhash
    const user = await User.create(payload)

    return { ...user }
}

export const getAllUsersService = async () => {
    const users = await User.find()

    return { ...users }
}