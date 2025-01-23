const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("User list")
    })

router.get('/new', (req, res) => {
    res.send("User New Form")
})

module.exports = router