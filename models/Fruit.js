const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Fruit = new Schema({
    id: Number,
    name: String,
    url: String,
    score: {
        type: Number,
        default: 1000
    }
})

module.exports = mongoose.model('Fruit', Fruit)