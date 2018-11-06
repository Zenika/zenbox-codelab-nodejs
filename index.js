const service = require('./service')
const express = require('express')
const app = express()

app.get('/hello', function (req, res) {
  res.send(service.sayHello() + service.sayWorld())
})

app.listen(4000)

