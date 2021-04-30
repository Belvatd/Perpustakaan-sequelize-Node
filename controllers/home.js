module.exports = {
    index(req, res) {
        return res.send('selamat datang di Perpustakaan')
    },
    home(req, res) {
        return res.send({
            user: req.user
        })
    }
}
