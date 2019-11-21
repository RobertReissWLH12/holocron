const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        console.log(req.body)
        const {email, username, password, profile_img} = req.body
        const db = req.app.get('db')

        const result = await db.get_user(username)
        result = result[0];
        if (result) {
             res.status(409).send(`Already taken that username is.`)
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            const registeredUser = await db.register({username, password:hash, })
            registeredUser = registeredUser[0]
            req.session.user = {...registeredUser
            }
            res.status(200).send(req.session.user);
        }
    },

    login: async (req, res) => {
        const {username, password} = req.body
        const foundUser = await req.app.get('db').get_user([username])
        const user = foundUser[0]
        if (!user) {
            return res.status(401).send('User not found.  Please register as a new user before logging in.')
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash)
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password!')
        }
        req.session.user = {
            id: user.id,
            username: user.username
        }
        return res.send(req.session.user)
    },

    logout: (req, res) => {
        req.session.destroy()
        return res.status(200)
        .send({message: 'Logged Out'})
    }
}