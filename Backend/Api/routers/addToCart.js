const addToCart = require('express').Router();

// addToCart.get('/',(req,res)=>{
//     res.send('get request to cart page');
// });


// addToCart.post('/',(req,res)=>{
//     res.status(404).send('not found');
// });
addToCart.post('/',(req,res)=>{
    // reciving data from body
    // console.log(req.body.name);
    // res.send(req.body.name);

    // reciving data from headers
    //  console.log(req.headers);
    //  res.send(req.headers);

    // reciving data from query string
    console.log(req.query);
    res.send(req.query);
});


module.exports = addToCart;