const rand = function (max) {
    let random = Math.random()
    return Math.ceil(random * max)
}

const Fruit = require('../models/Fruit')

module.exports = {
    index: (req, res) => {
        Fruit.countDocuments()
        .then(count => {
            let id1
            let id2
            while(id1 === id2) {
                id1 = rand(count)
                id2 = rand(count)
            }
            Fruit.find({$or: [{ id: id1}, { id: id2 }]})
            .then(fruits => {
                res.render('fruit/fight', { fruits })
            })
        })
    },
    update: (req, res) => {
        Fruit.findOne({ id: req.params.id })
        .then(fruit => {
            let score = fruit.score + 200
            Fruit.findOneAndUpdate({ id: req.params.id }, { $set: { score: score }})
            .then(() => {
                res.redirect('/fruit')
            })
        })
    }
}

