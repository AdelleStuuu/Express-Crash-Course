const express = require('express');
const app = express(); 

app.use(express.json());
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render("index", {text : 'World'});
});

const userRouter = require('./routes/users');

app.use('/users', userRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});