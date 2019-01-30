const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Matchup = new Schema({
    winner: Number,
    loser: Number,
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Matchup', Matchup)