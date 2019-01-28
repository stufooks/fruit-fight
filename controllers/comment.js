const Comment = require('../models/Comment')

module.exports = {
    create: (req, res) => {
        Comment.create({
            name: req.body.comment.name,
            fruit: req.body.comment.fruit,
            content: req.body.comment.content
        }).then(comment => {
            res.redirect(`comment/${comment._id}/`)
        })
    },
    show: (req, res) => {
        console.log(req.params.id)
        Comment.findOne({ _id: req.params.id })
        .then(comment => {
            console.log(comment)
            res.render('comment/show', { comment })
        })
    },
    delete: (req, res) => {
        Comment.findOneAndRemove({ _id: req.params.id })
        .then(() => {
            res.redirect('/leaderboard')
        })
    }
}