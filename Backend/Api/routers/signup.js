const userSignup = require('express').Router();
// const Joi = require('joi');
const  validateUser  = require('./Validation_Schema/userSchema');


userSignup.post('/', (req, res) => {    
    const { error } = validateUser(req.body);
    error ? res.status(400).send(error.details[0].message) : res.send('Successful Signup');

}); 

module.exports = userSignup;