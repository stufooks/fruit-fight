const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comment = new Schema({
    fruit: String,
    content: String,
    user: {
        type: String,
        default: "Anonymous"
    }
})

module.exports = mongoose.model('Comment', Comment)