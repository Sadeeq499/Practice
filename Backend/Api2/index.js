const express = require('express');
require('dotenv/config');
const app = express();
const userRoute = require('./routes/user');
const mangoose = require('mongoose');



const port = process.env.PORT || 3001;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// connect to mongodb w
mangoose.set('strictQuery', false)
mangoose.connect(`mongodb+srv://${process.env.DB_Username}:${process.env.DB_Password}@cluster0.utjak6l.mongodb.net/?retryWrites=true&w=majority`,()=>{
    console.log('connected to DB');
})


app.use('/user', userRoute);


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});