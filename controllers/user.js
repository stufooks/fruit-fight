const compare = function(a, b){
    if (a.score > b.score) return -1
    if (b.score > a.score) return 1
  
    return 0;
}


const User = require("../models/User");
const passport = require("passport");

module.exports = {
  showLogin: (req, res) => {
    res.render("user/login");
  },
  createLogin: (req, res, next) => {
    let loginStrategy = passport.authenticate("local-login", {
      successRedirect: "/",
      failureRedirect: "/user/login",
      failureFlash: true
    });
    return loginStrategy(req, res, next);
  },
  showSignup: (req, res) => {
    res.render("user/signup");
  },
  createSignup: (req, res, next) => {
    let signupStrategy = passport.authenticate("local-signup", {
      successRedirect: "/",
      failureRedirect: "/user/signup",
      failureFlash: true
    });
    return signupStrategy(req, res, next);
  },
  showLeaderboard: (req, res) => {
    if (req.user) {
      User.findOne({ _id: req.user._id })
        .then(user => {
        user.local.fruits.sort(compare)
        user.save()
          res.render("user/leaderboard", { user });
        });
    } else {
      res.redirect("/user/login");
    }
  }
};
