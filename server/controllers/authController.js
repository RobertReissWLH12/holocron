const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        console.log(req.body)
        const db = req.app.get('db')
        const { email, username, password1, password2} = req.body
        
        const found = await db.get_user([username])
        // result = result[0];
        // if (result) {
            if (+found[0].count !== 0) {
                return res.status(409).send(`Already taken that username is.`)
            }
            const user_id = await db.register({ username, email})
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password2, salt)
        db.add_hash({ user_id: user_id[0].user_id, hash: hash })
        console.log(hash)
        req.session.user = { user_id: user_id[0].user_id, email, username }
        res.status(201).send({ message: 'Logged In', user: req.session.user });
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const { username, password } = req.body
        const found = await db.get_user([username])
        // const user = foundUser[0]
        // if (!user) {
        if (+found[0].count === 0) {
            return res.status(401).send('User not found.  Please register as a new user before logging in.')
        }
        const foundUser = await db.get_hash([username])
        const {hash, user_id, portrait, email} = foundUser[0]
        const result = bcrypt.compareSync(password, hash)
        if (!result) {
            return res.status(403).send('Incorrect password!')
        }
        // req.session.user = {
        //     id: user.id,
        //     email: user.email,
        //     username: user.username,
        //     password: user.password,
        //     portrait: user.portrait
        // }
        req.session.user = {user_id, username, portrait, email}
        res.status(200).send({ message: 'Logged in successfully!', user: req.session.user })
    },

    logout: (req, res) => {
        req.session.destroy()
        res.status(200).send({ message: 'Logged Out' })
    },

    getUser: (req, res) => {
        res.status(200).send(req.session.user)
    }
    // updatePortrait: (req, res) => {
    //     const db = req.app.get('db')
    //     const {portrait, user_id}
    //     .then(result => {
    //         res.status(200).send(result)
    //     })
    //     .catch(err => {
    //         res.status(500).send('An error occured with updateProfile')
    //         console.log(err)
    //     })
    // }
}