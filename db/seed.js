const Fruit = require('../models/Fruit')
const Comment = require('../models/Comment')

Fruit.deleteMany({}).then(() => {
    Fruit.create({
        id: 1,
        name: "Red Apple",
        url: "https://fillmurray.com/200/500",
    }, {
        id: 2,
        name: "Orange",
        url: "https://fillmurray.com/200/300"
    })
})

Comment.deleteMany({})