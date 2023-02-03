// creating a express 
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// creating a route
app.get('/dd', (req, res) => {
    res.send('Hello World!');
});


// creating a server
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});