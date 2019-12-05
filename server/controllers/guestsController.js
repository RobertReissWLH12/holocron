module.exports = {
    getPortraits: (req, res) => {
        const db = req.app.get("db");
        db.get_portraits()
        .then(portraits => res.status(200).send(portraits))
        .catch(err => console.log(err))
    }
}