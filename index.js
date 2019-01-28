const express = require('express')
const app = express()
const hbs = require('hbs')
const port = 3000

app.set('view engine', 'hbs')
app.use(express.static('public'))


app.use(require("./routes/index.js"))

app.listen(port, () => console.log(`server is running on port ${port}`))