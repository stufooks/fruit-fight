const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fruit')
mongoose.Promise = Promise
module.exports = mongoose