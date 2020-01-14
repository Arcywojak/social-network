const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');

//User model
const User = require('../../models/user');

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req,res) => {
    const {name, email, image, password} = req.body;

    //Simple validation
    if(!name || !password || !email) {
        return res.status(400).json({msg:"Please, enter all fields"})
    }

    //Check for existing user
    User.findOne({email})
        .then( user => {
            if(user){
                return res.status(400).json({msg:"This user already exists"});
            }

            const newUser = new User({
                name,
                email,
                image,
                password
            });


            //Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) throw err;
                    newUser.password = hash;
                    newUser.save()
                    .then( user => {

                        jwt.sign(
                            {id:user.id},
                            config.get('jwtSecret'),
                            {expiresIn:3600},
                            (err, token) => {
                                if(err) throw err;
                                res.json({
                                    token,
                                    user:{
                                        id: user.id,
                                        name: user.name,
                                        email: user.email
                                    }
                                });
                            }
                        )
                    });
                })
            })
        })
});

module.exports = router