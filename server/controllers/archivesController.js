module.exports = {
    getBooks: (req, res) => {
        const db = req.app.get("db");
        db.get_archives()
        .then(archives => res.status(200).send(archives))
        .catch(err => console.log(err))
    },

    addFavorite: (req, res) => {
        const db = req.app.get("db")
        const {user_id} = req.session.user
        const {archives_id} = req.body;
        db.add_favorite([user_id, archives_id])
        .then(favorites => {
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
    },
    
    getFavorites: (req, res) => {
        const db = req.app.get("db")
        // console.log(req.session)
        const {user_id} = req.session.user
        db.get_favorites([user_id])
        .then(favorites => res.status(200).send(favorites))
        .catch(err => console.log(err))
    },

    removeFavorite: (req, res) => {
        const db = req.app.get("db")
        // console.log(req.params)
        // const {user_id} = req.session.user
        const { favorite_id } = req.params;
        db.remove_favorite([favorite_id])
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => res.status(500).send(err))
    }
}