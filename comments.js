// create web server 
// use express 
const express = require('express');
const router = express.Router();
// use comment model 
const Comment = require('../models/comment');
// create new comment 
router.post('/new', (req, res) => {
    const newComment = new Comment({
        comment: req.body.comment,
        user: req.body.user,
        post: req.body.post
    });
    newComment.save().then(comment => res.json(comment)).catch(err => console.log(err));
});
// get all comments 
router.get('/', (req, res) => {
    Comment.find().then(comments => res.json(comments)).catch(err => console.log(err));
});
// get comment by id 
router.get('/:id', (req, res) => {
    Comment.findById(req.params.id).then(comment => res.json(comment)).catch(err => console.log(err));
});
// update comment 
router.put('/:id', (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(comment => res.json(comment)).catch(err => console.log(err));
});
// delete comment 
router.delete('/:id', (req, res) => {
    Comment.findByIdAndDelete(req.params.id).then(comment => res.json(comment)).catch(err => console.log(err));
});
// export 
module.exports = router;
