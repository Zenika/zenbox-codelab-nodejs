const chalk = require('chalk')
const service = require('./service')

console.log(chalk.green(`${service.sayHello()} ${service.sayWorld()}`))


service.log('Hello world\n').then(() => console.log('Log done !'))