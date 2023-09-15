const Dog = require('./mod1')

const doguinho = new Dog('Julie')
doguinho.latir()

const path = require('path')

console.log(__dirname)

console.log(path.resolve(__dirname, '..', '..', 'files', 'image', 'car.png'))