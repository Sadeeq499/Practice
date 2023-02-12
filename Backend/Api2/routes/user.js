const userRoute = require('express').Router();
const {registerValidation} = require('./validation')
const User = require('../Model/User');
const bcrypt = require('bcryptjs')

// user route with empty register
userRoute.get('/register', (req, res) => {
    res.send('Hello World!');
});

userRoute.post('/register',async (req, res) => {
    const {name,email,password} = req.body;
    const {error} = registerValidation(req.body);
    // error ? res.status(400).send(error.details[0].message) : res.send('Successful Signup');
        if(error) return  res.status(400).send(error.details[0].message); // Guard Clause

        // encode the password of user
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password,salt);

        // constrain on same email user
        const findingUser = await User.findOne({email:email});
        if(findingUser)   return res.status(400).send("email is already Registered");    


        // assigning the req.body details to MongoDB through model
        const user = new User ({
            name,
            email,
            password :hash
        });

        try{
           const UserSaved = await user.save();
           res.send(UserSaved)
        } catch(err){
                res.status(400).send(err);
        }

});


userRoute.patch('/register', (req, res) => {
    res.send('Hello World!');
}   );


userRoute.delete('/register', (req, res) => {
    res.send('Hello World!');
}  );



// user route with login
userRoute.get('/login', (req, res) => {
    res.send('Hello World!');
});


userRoute.post('/login', (req, res) => {
    res.send('Hello World!');
});


userRoute.patch('/login', (req, res) => {
    res.send('Hello World!');
});


userRoute.delete('/login', (req, res) => {
    res.send('Hello World!');
});



module.exports = userRoute;