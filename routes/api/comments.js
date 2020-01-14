const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//comment model
const Comment = require('../../models/comment');

// @route   Get api/scomment
// @desc    Get All  comment
// @access  Public

router.get('/', (req, res) => {
    Item.find()
    .sort({date:-1})
    .then(comment => res.json(comment))
})

// @route   Post api/comments
// @desc    Create comment
// @access  Private //NOT DONE

router.post('/', auth, (req, res) => {
    const newComment = new Comment({
        user_id:req.body.user_id,
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