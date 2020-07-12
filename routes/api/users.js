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
    const {name, email, image, password, repPassword} = req.body;

    //Simple validation
    if(!name || !password || !email) {
        return res.status(400).json({msg:"Please, enter all fields"})
    }
    if(password !== repPassword) {
        return res.status(400).json({msg:"passwords do not match"})
    }

    const specialChars = /\W|_/g;

    if(specialChars.test(name)){
        return res.status(400).json({msg:"Name must not contain special characters"})
    }

    if(name.length < 3){
        return res.status(400).json({msg:"the name is too short"})
    }
    if(name.length > 18){
        return res.status(400).json({msg:"the name is too long"})
    }

    if(password.length < 3){
        return res.status(400).json({msg:"the password is too short"})
    }

    const emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!emailValidator.test(email) ){
        return res.status(400).json({msg:"your email is not valid"})

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
                                        email: user.email,
                                        image:user.image
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