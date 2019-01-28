const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Fruit = new Schema({
    name: String,
    image: String,
    score: Number
})

module.exports = mongoose.model('Fruit', Fruit)