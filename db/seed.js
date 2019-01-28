const Fruit = require('../models/Fruit')
const Comment = require('../models/Comment')

Fruit.deleteMany({}).then(() => {
    Fruit.create({
        id: 1,
        name: "Red Apple",
        url: "https://flic.kr/p/jNQ55",
    }, {
        id: 2,
        name: "Orange",
        url: "https://flic.kr/p/eVGmEp"
    })
})

Comment.deleteMany({})