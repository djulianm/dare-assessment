'use strict'

const User = use('App/Models/User')
const { validateAll} = use('Validator')

class UserController {

    async login({request, response, auth}) {
        const {email, password} = request.all()

        const token = await auth.attempt(email, password)

        return token
    }

    async create({request, response}) {

        const validation = await validateAll(request.all(), {
            username: 'required|min:4|unique:users',
            email: 'required|min:5|unique:users',
            password: 'required|min:6',
            role: 'required'
        })

        if (validation.fails()) {
            return response.status(401).send({ message: validation.messages() })
        }

        const data = request.only(['username', 'email', 'password', 'role'])

        const user = User.create(data)

        return user;

        
    }
}

module.exports = UserController
