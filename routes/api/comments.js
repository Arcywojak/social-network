const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//comment model
const Comment = require('../../models/comment');

// @route   Get api/comment
// @desc    Get TO ONE POST comments
// @access  Public

router.get('/:id', auth, (req, res) => {
    Comment.find({post_id: req.params.id})
    .sort({date:-1})
    .then(comment => res.json(comment))
})

// @route   Post api/comments
// @desc    Create comment
// @access  Private //NOT DONE

router.post('/', auth, (req, res) => {
    const newComment = new Comment({
        post_id:req.body.post_id,
        user_name:req.body.user_name,
        user_image:req.body.user_image,
        content:req.body.content
    });

    newComment.save().then(comment => res.json(comment));

});

// @route   Delete api/items/:id
// @desc    Delete item
// @access  Private //NOT DONE

router.delete('/:id', auth, (req, res) => {
    Comment.findById(req.params.id)
    .then( Comment.remove()
    .then( () => res.json({status:"delete successful"})))
    .catch(err => res.status(404).json({status:"delete failed"}));
});

module.exports = router