const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');

//User model
const User = require('../../models/user');

// @route   POST api/auth
// @desc    Auth user
// @access  Public
router.post('/', (req,res) => {
    const { email, password} = req.body;

    //Simple validation
    if(!password || !email) {
        return res.status(400).json({msg:"Please, enter all fields"})
    }

    //Check for existing user
    User.findOne({email})
        .then( user => {
            if(!user){
                return res.status(400).json({msg:"User does not exist"});
            }

            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({msg:"Wrong credentials"});

                    jwt.sign(
                        {id:user.id},
                        config.get('jwtSecret'),
                        {expiresIn:3600},
                        (err, token) => {
                            if(err) throw err;
                            res.json({
                                token,
                                user: {
                                    _id: user.id,
                                    name:user.name,
                                    image: user.image,
                                    email: user.email,
                                    register_date: user.register_date
                                }
                            });
                        }
                    )
                })
        })
});

// @route   GET api/auth
// @desc    GET user data
// @access  Private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user)) ;
});

// @route   GET api/auth
// @desc    GET user data (not logged, but other user)
// @access  Private
router.get('/user/:name', auth, (req, res) => {
    User.findOne( {"name" : req.params.name } )
        .select('-password')
        .then(user => res.json(user))
        .catch ;
});
module.exports = router