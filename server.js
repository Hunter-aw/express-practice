var express = require('express');
var app = express()
app.listen(8000)
const api = require('./api');
app.use('/', api)
const candy = require('./candy');
app.use('/', candy)
