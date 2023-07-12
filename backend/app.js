const express = require('express');
const mongoose = require('mongoose')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

mongoose.connect('mongodb://localhost:27017/wordsdatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log('Connected to mongodb://localhost:27017/wordsdatabase')
})
.catch((error)=>{
    console.log('Failed to connect to MongoDB', error);
});

app.use((req, res, next)=>{
    console.log('the request is finished')
    next();
});

app.use((req, res, next)=>{
    res.send('Hello from express')
});

module.exports = app;