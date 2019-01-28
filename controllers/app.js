const Fruit = require('../models/Fruit')

module.exports = {
    show: (req, res) => {
        res.render('app/home')
    },
    index: (req, res) => {
        res.send('hello')
    }
}