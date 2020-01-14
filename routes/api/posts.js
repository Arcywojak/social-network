const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

//post model
const Post = require('../../models/post');

// @route   Get api/posts
// @desc    Get All posts
// @access  Public

router.get('/', (req, res) => {
    Item.find()
    .sort({date:-1})
    .then(items => res.json(items))
})

// @route   Post api/posts
// @desc    Create post
// @access  Private //NOT DONE

router.post('/', auth, (req, res) => {
    const newPost = new Post({
        user_id:req.body.user_id,
        user_name:req.body.user_name,
        user_image:req.body.user_image,
        title:req.body.title,
        content:req.body.content
    });

    newPost.save().then(post => res.json(post));

});

// @route   Delete api/items
// @desc    Delete item
// @access  Private //NOT DONE

router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
    .then( item.remove()
    .then( () => res.json({status:"delete successful"})))
    .catch(err => res.status(404).json({status:"delete failed"}));
});

module.exports = router