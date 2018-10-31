const fs = require('fs').promises

exports.sayHello = () => 'Hello'
exports.sayWorld = () => 'World'

exports.log = dataString => fs.appendFile('./out.log', dataString)
