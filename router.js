const http = require('http');
const express = require('express');
const app = express();


const homeRouter = require('./routes/home');

app.use('/', homeRouter);


app.listen(3000, '127.0.0.1', () => {
    console.log('Server is running on sockey 127.0.0.1:3000');
})