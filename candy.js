const express = require('express')
const waka = express.Router()

waka.get('/candy', function(request, response) {
    response.send("I want candy!");
});

module.exports = waka