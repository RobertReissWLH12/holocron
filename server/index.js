require('dotenv').config();
const express = require('express');
const session = require('express-session')
const authCtrl = require('./controllers/authController')
const guestsCtrl = require('./controllers/guestsController')
// const treasuresCtrl = require('./controllers/treasuresController')
const archivesCtrl = require('./controllers/archivesController')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const app = express()
const stripe = require("stripe")("sk_test_6RF2mu6OLiTwnXY0PVMaChbo00p4BjSGMJ");

app.use(require("body-parser").text());


// TOP-LEVEL MIDDLEWARE
app.use(express.json())

app.use( express.static( `${__dirname}/../build` ) );

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 2
    }
}))

// ***  ENDPOINTS  ***

// ARCHIVES
app.get('/api/allArchives', archivesCtrl.getArchives)

// SEARCH PAGE
app.get('/api/archives', archivesCtrl.getBooks)

// FAVORITES (ARCHIVES)
app.post('/api/archives', archivesCtrl.addFavorite)

// FAVORITES (CONTRACTS)
app.get('/api/user_favorites', archivesCtrl.getFavorites)
// app.put('/api/archives/:id', archivesCtrl.editBook)
app.delete('/api/user_favorites/:favorite_id', archivesCtrl.removeFavorite)

// REGISTERING, LOGGING IN AND LOGGING OUT
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.delete('/auth/logout', authCtrl.logout)
app.get('/auth/getUser', authCtrl.getUser)
// app.put('/auth/updateProfile', authCtrl.updateProfile)

// BROWSING AND CHANGING PROFILE PICTURES
app.get('/api/portraits', guestsCtrl.getPortraits)
app.put('/api/portraits', guestsCtrl.updatePortrait)

// STRIPE ENDPOINTS
app.post("/charge", async (req, res) => {
    try {
        let{status} = await stripe.charges.create({
            amount: 2000,
            currency: "usd",
            description: "An example charge",
            source: req.body
        });

        res.json({status});
    } catch(err) {
        console.log(err);
        res.status(500).end();
    }
});

//  MASSIVE
massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance);
        console.log('database is connected')
        app.listen(SERVER_PORT, () =>
        console.log(`Server is listening on port ${SERVER_PORT}.`))
})
.catch(err => console.log(err))