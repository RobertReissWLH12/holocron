require('dotenv').config();
const express = require('express');
const session = require('express-session')
const authCtrl = require('./controllers/authController')
// const guestsCtrl = require('./controllers/guestsController')
// const treasuresCtrl = require('./controllers/treasuresController')
const archivesCtrl = require('./controllers/archivesController')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
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
app.get('/api/archives', archivesCtrl.getBooks)
// app.post('/api/archives', archivesCtrl.addBook)
// app.put('/api/archives/:id', archivesCtrl.editBook)
// app.delete('/api/archives/:id', archivesCtrl.removeBook)

// REGISTERING, LOGGING IN AND LOGGING OUT
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/getUser', authCtrl.getUser)
// app.put('/auth/updateProfile', authCtrl.updateProfile)

// BROWSING AND CHANGING PROFILE PICTURES
// app.get('/api/guests', guestsCtrl.getProfilePics)
// app.put('/api/guests', guestsCtrl.changeProfilePicture)

//  MASSIVE
massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
        console.log('database is connected')
        app.listen(SERVER_PORT, () =>
        console.log(`Server is listening on port ${SERVER_PORT}.`))
})
.catch(err => console.log(err))