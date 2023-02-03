// creating a express 
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// creating a route
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the API',
        name: 'Sadeeq',
        age: 25,
        email: 'sadeeq@gmail.com',
        phone: '1234567890',
        address: 'Bangalore',
        country: 'India',
        state: 'Karnataka',
        city: 'Bangalore',
        pincode: '560001'

    });
});

    app.post('/', (req, res) => {
        res.send('Post request Mr.Sadeeq');});

// creating a server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
