const profile = require('express').Router();

profile.get('/',(req,res)=>{
    res.send('get request to profile page');
});


profile.get('/password',(req,res)=>{
    res.status(404).send('not found');
});

module.exports = profile;