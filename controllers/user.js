const User = require("../models/User")
const passport = require('passport')


module.exports = {
    showLogin: (req, res) => {
        res.render('user/login')
    },
    createLogin: (req, res, next) => {
        let loginStrategy = passport.authenticate('local-login', {
			successRedirect: '/',
			failureRedirect: '/user/login',
			failureFlash: true
		})
		return loginStrategy(req, res, next)
    },
    showSignup: (req, res) => {
        res.render('user/signup')
    },
    createSignup: (req, res, next) => {
        let signupStrategy = passport.authenticate('local-signup', {
			successRedirect: '/',
			failureRedirect: '/user/signup',
			failureFlash: true
		})
		return signupStrategy(req, res, next)
    }
}