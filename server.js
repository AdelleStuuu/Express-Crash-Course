const express = require('express');
const app = express(); 

app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    console.log('Server started on port 3000');  

    res.render("index", {text : 'World'});
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

app.listen(3000);