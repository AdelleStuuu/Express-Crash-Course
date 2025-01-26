const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("../views/content/test1.ejs")
    })

router.get('/new', (req, res) => {
    res.send("User New Form")
})

module.exports = router