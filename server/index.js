require('dotenv').config();
const express = require('express');
const session = require('express-session')
const controller = require('./controllers/authController')
const controller = require('./controllers/guestsController')
const controller = require('./controllers/treasuresController')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SERVER_SECRET} = process.env;
const app = express()


// TOP-LEVEL MIDDLEWARE
app.use(express.json())

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET
}))

// ***  ENDPOINTS  ***

// ARCHIVES
app.get('/api/archives', controller.getBooks)
app.post('/api/archives', controller.addBook)
app.put('/api/archives/:id', controller.editBook)
app.delete('/api/archives/:id', controller.removeBook)

// REGISTERING, LOGGING IN AND LOGGING OUT
app.post('./auth/register', authCtrl.register)
app.post('./auth/login', authCtrl.login)
app.get('./auth/logout', authCtrl.logout)

// BROWSING AND CHANGING PROFILE PICTURES
app.get('/api/guests', guestsCtrl.getProfilePics)
app.put('/api/guests', guestsCtrl.changeProfilePicture)

//  MASSIVE
massive(CONNECTION_STRING)
.then(db => {
    app.set('db', db);
        console.log('database is connected')
        app.listen(SERVER_PORT, () =>
        console.log(`Server is listening on port ${SERVER_PORT}.`))
})
.catch(err => console.log(err))