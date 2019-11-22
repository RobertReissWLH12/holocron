module.exports = {
    getBooks: (req, res) => {
        const db = req.app.get("db");
        db.get_archives()
        .then(archives => res.status(200).send(archives))
        .catch(err => console.log(err))
    }
}