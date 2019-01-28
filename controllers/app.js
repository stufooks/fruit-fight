const Fruit = require('../models/Fruit')

module.exports = {
    show: (req, res) => {
        res.render('app/home')
    },
    index: (req, res) => {
        Fruit.find({})
        .sort({ score: -1 })
        .then(results => {
            console.log(results)
            res.render('app/leaderboard', { results })
        })
    }
}