// creating a express 
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const bodyParser = require('body-parser');
app.use(bodyParser.json());



// creating a route
const addToCart = require('./routers/addToCart');
const showProfile = require('./routers/showProfile');
const userSignup = require('./routers/signup');

// using a route
app.use('/api/cart', addToCart);
app.use('/api/profile', showProfile);
app.use('/api/signup', userSignup);

// creating a server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
