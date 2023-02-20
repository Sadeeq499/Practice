const jwt = require('jsonwebtoken');

const auth = (req, res, next)=>{

    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied');

    try{
        const Verified= jwt.verify(token, process.env.token_secret)
        req.user = Verified
        next();

    }catch(err){
        res.status(400).send(err)
    }

}

module.exports = auth;