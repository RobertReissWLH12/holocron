module.exports = {
    getBooks: (req, res) => {
        const db = req.app.get("db");
        db.get_archives()
        .then(archives => res.status(200).send(archives))
        .catch(err => console.log(err))
    },

    addFavorite: (req, res) => {
        const db = req.app.get("db"),
        {archives_id} = req.body;
        db.add_favorite([archives_id])
        .then(favorites => {
            res.sendStatus(200);
        })
        .catch(err => console.log(err))
    },

    getFavorites: (req, res) => {
        res.status(200).send(favorites)
    },

    removeFavorite: (req, res) => {
        const db = req.app.get("db"),
        { id } = req.params;
        db.delete_favorite(id)
        .then(() => {
            res.sendStatus(200);
        })
        .catch(err => res.status(500).send(err))
    }
}