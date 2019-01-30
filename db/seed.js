const Fruit = require('../models/Fruit')
const Comment = require('../models/Comment')
const Matchup = require('../models/Matchup')

Fruit.deleteMany({}).then(() => {
    Fruit.create({
        id: 1,
        name: "Red Apples",
        url: "https://i.imgur.com/hDNsdDj.jpg",
    }, {
        id: 2,
        name: "Oranges",
        url: "https://i.imgur.com/VtWAepw.jpg"
    }, {
        id: 3,
        name: "Pears",
        url: "https://i.imgur.com/l2ocHBz.jpg"
    }, {
        id: 4,
        name: "Grapes",
        url: "https://i.imgur.com/uIXdbVg.jpg"
    }, {
        id: 5,
        name: "Strawberries",
        url: "https://i.imgur.com/TIPOzOt.jpg"
    }, {
        id: 6,
        name: "Peaches",
        url: "https://i.imgur.com/mfXnmN1.jpg"
    }, {
        id: 7,
        name: "Honeydew",
        url: "https://i.imgur.com/fdVgZr9.jpg"
    }, {
        id: 8,
        name: "Cantaloupe",
        url: "https://i.imgur.com/X9lJMWW.png"
    }, {
        id: 9,
        name: "Kiwi",
        url: "https://i.imgur.com/7UtCY8a.jpg"
    }, {
        id: 10,
        name: "Watermelon",
        url: "https://i.imgur.com/L4d4iCq.jpg"
    }, {
        id: 11,
        name: "Green Apples",
        url: "https://i.imgur.com/4aLfgKy.jpg"
    }, {
        id: 12,
        name: "Raspberries",
        url: "https://i.imgur.com/M7B3C0N.jpg"
    }, {
        id: 13,
        name: "Blackberries",
        url: "https://i.imgur.com/l4q6KM8.jpg?1"
    }, {
        id: 14,
        name: "Blueberries",
        url: "https://i.imgur.com/0TIDer1.jpg"
    }, {
        id: 15,
        name: "Pineapple",
        url: "https://i.imgur.com/SpMTYol.jpg"
    }, {
        id: 16,
        name: "Mango",
        url: "https://i.imgur.com/r69fwSN.jpg?1"
    }, {
        id: 17,
        name: "Cherries",
        url: "https://i.imgur.com/CNUA6ry.jpg"
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