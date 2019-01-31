const express = require("express")
const app = express()
const flash = require('connect-flash')
const hbs = require("hbs")
const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

app.set("view engine", "hbs")
app.use(express.static("public"))

app.use(session({secret: 'WDI-GENERAL-ASSEMBLY-EXPRESS'}))
app.use(flash())

require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use(require("./routes/index.js"))

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log(`PORT: ${app.get('port')}`)
})