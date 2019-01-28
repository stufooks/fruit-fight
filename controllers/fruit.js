const randomIndex = function (max) {
    let random = Math.random()
    return Math.ceil(random * max)
}

const Fruit = require('../models/Fruit')

module.exports = {
    index: (req, res) => {
        Fruit.countDocuments()
        .then(count => {
            let id1 = 1
            let id2 = 1
            while(id1 === id2) {
                id1 = randomIndex(count)
                id2 = randomIndex(count)
            }
            // find all fruits where id = id1 OR id = id2
            console.log(id1, id2)
            Fruit.find({$or: [{ id: id1}, { id: id2 }]})
            .then(fruits => {
                console.log(fruits)
                res.render('fruit/fight', { fruits })
            })
        })
    },
    update: (req, res) => {
        res.send('hello put')
    }
}

