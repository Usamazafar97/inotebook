const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');


// create a User using: POST "/api/auth/". Doesn't require Auth
router.post('/', 
body('email').isEmail(),
(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
    .catch(error => {
        console.log(error)
        res.json({
            error: 'Please enter a unique email'
        })
    })
})



module.exports = router