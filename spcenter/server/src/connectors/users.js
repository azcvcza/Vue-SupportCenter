import bcrypt from 'bcryptjs'
import { Users } from '../providers'
import * as Tickets from './tickets'

const SALT_ROUNDS = 10

export async function getById(id) {
    return await Users.findOne({ _id: id })
}

export async function getByUsername(username) {
    return await Users.findOne({ username })
}

export async function isPasswordMatching(user, password) {
    return await bcrypt.compare(password, user.password)
}

export async function hashPassword(password) {
    console.log("in create hashPassword:", password, SALT_ROUNDS)
    let result = await bcrypt.hash(password, SALT_ROUNDS)
    console.log("bycript result:", result)
    return result
}

export async function createUser({ username, email, password }) {
    console.log("in createUser,uname,email,pwd", username, email, password)
    const user = await getByUsername(username)
    console.log("after await user:", user)
    if (user) {
        throw new Error('Duplicate username')
    } else {
        console.log("can i get here")
        const hash = await hashPassword(password)
        console.log("get hashpassword", hash);
        const result = await Users.insert({
            username,
            email,
            password: hash,
        })
        console.log("get here in createUser:", Users, "result:", result)
        Tickets.create({ user: result }, {
            title: 'Welcome',
            description: 'Welcome to our support center!',
        })
        console.log("get here in createUser after ticket")
        return result
    }
}