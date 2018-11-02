var service = require('./service')
var express = require('express')
var app = express()

app.get('/hello', function (req, res) {
  res.send(service.sayHello + service.sayWorld)
})

app.listen(4000)