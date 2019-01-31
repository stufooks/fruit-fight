const Fruit = require('../models/Fruit')
const Comment = require('../models/Comment')
const Matchup = require('../models/Matchup')

Fruit.deleteMany({}).then(() => {
    Fruit.create({
        id: 1,
        name: "Red Apples",
        src: "images/red-apple.jpg",
    }, {
        id: 2,
        name: "Oranges",
        src: "images/oranges.jpg"
    }, {
        id: 3,
        name: "Pears",
        src: "images/pears.jpg"
    }, {
        id: 4,
        name: "Grapes",
        src: "images/grapes.jpg"
    }, {
        id: 5,
        name: "Strawberries",
        src: "images/strawberries.jpg"
    }, {
        id: 6,
        name: "Peaches",
        src: "images/peaches.jpg"
    }, {
        id: 7,
        name: "Honeydew",
        src: "images/honeydew.jpg"
    }, {
        id: 8,
        name: "Cantaloupe",
        src: "images/cantaloupe.jpg"
    }, {
        id: 9,
        name: "Kiwi",
        src: "images/kiwi.jpg"
    }, {
        id: 10,
        name: "Watermelon",
        src: "images/watermelon.jpg"
    }, {
        id: 11,
        name: "Green Apples",
        src: "images/green-apple.jpg"
    }, {
        id: 12,
        name: "Raspberries",
        src: "images/raspberries.jpg"
    }, {
        id: 13,
        name: "Blackberries",
        src: "images/blackberries.jpg"
    }, {
        id: 14,
        name: "Blueberries",
        src: "images/blueberries.jpg"
    }, {
        id: 15,
        name: "Pineapple",
        src: "images/pineapple.jpg"
    }, {
        id: 16,
        name: "Mango",
        src: "images/mango.jpg"
    }, {
        id: 17,
        name: "Cherries",
        src: "images/cherries.jpg"
    }).then( () => {
        Comment.deleteMany({}).then( () => {
            Comment.create({
                fruit: "Avocado",
                content: "Fun game!"
            }).then( () => {
                Matchup.deleteMany({}).then(() => {
                    console.log('done')
                })
            })
        })
    })
})