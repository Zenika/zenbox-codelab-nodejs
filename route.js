const express = require('express')
const rootRouter = express.Router()
const helloRouter = express.Router()

helloRouter
    .route('/')
    .get(function (req, res) {
        res.send('Hello no one')
    })

helloRouter
    .route('/me')
    .get(function (req, res) {
        res.send('Hello me')
    })

helloRouter
    .route('/world')
    .get(function (req, res) {
        res.send('Hello world')
    })

rootRouter
    .use('/hello', helloRouter)
    .route('/')
    .get(function (req, res) {
        res.setHeader('Content-Type', 'application/json')
        res.send('Main page')
    })

module.exports = rootRouter