const express = require('express')
const app = express()
const hbs = require('hbs')
const port = 3000
// const cors = require('cors')
const bodyParser = require("body-parser")
const methodOverride = require('method-override')

// app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.set('view engine', 'hbs')
app.use(express.static('public'))


app.use(require("./routes/index.js"))

app.listen(port, () => console.log(`server is running on port ${port}`))