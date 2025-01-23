const express = require('express');
const app = express(); 

app.get('/', function(req, res) {
    console.log('Server started on port 3000');  // Log the server start message to the console
    res.send('Hello, World!');
});

app.listen(3000);