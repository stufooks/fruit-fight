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
        Comment.find({ _id: req.params.id })
        .then(comment => {
            console.log(comment)
            res.render('comment/show', { comment })
        })
    },
    delete: (req, res) => {
        res.send('hello')
    }
}