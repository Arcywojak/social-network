const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//post model
const Post = require('../../models/post');

// @route   Get api/posts
// @desc    Get All posts
// @access  Public

router.get('/', (req, res) => {
    Post.find()
    .sort({add_date:-1})
    .then(items => res.json(items))
})

// @route   Get api/posts/id
// @desc    Get ONE post
// @access  Public

router.get('/:id', (req, res) => {

    Post.findById(req.params.id)
    .sort({add_date:-1})
    .then(items => res.json(items))
})

// @route   Post api/posts
// @desc    Create post
// @access  Private 

router.post('/', auth, (req, res) => {
    const newPost = new Post({
        user_id:req.body.user_id,
        user_name:req.body.user_name,
        user_image:req.body.user_image,
        title:req.body.title,
        content:req.body.content,
        tags:req.body.tags
    });

    newPost.save().then(post => res.json(post));

});

// @route   Delete api/posts
// @desc    Delete post
// @access  Private 

router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
    .then( item.remove()
    .then( () => res.json({status:"delete successful"})))
    .catch(err => res.status(404).json({status:"delete failed"}));
});

module.exports = router