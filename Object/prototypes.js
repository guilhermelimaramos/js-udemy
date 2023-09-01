//Prototype with Constructor
function People (name, lastname) {
  this.name = name,
  this.lastname = lastname
  // this.fullName = () => 'Origin: ' + this.name + ' ' + this.lastname;
}

People.prototype.fullName = function() {return this.name + ' ' + this.lastname;}

const people1 = new People('Guilherme', 'L.');
const date = new Date();

console.log(people1.fullName())


console.log('===========================================')

//Prototype with Objects
const objA = {
  keyA: 'A',
}

const objB = {
  keyB: 'B',
}

const objC = new Object();
objC.keyC = 'C'

Object.setPrototypeOf(objB, objA)

Object.setPrototypeOf(objC, objB)

console.log(objB.keyA)
console.log(objC.keyA)
console.log(objC.keyB)
console.log(objC.keyC)

console.log('===========================================')

//Prototype with FUnction and Objects

function Product (name, price) {
  this.name = name,
  this.price = price
}

Product.prototype.discout = function (value) {
  this.price = this.price - (this.price * (value / 100))
}

Product.prototype.increase = function (value) {
  this.price += value;
}

const prod1 = new Product('Tv', 3000)
//prod1.discout(20)
prod1.increase(100)
prod1.discout(20)
console.log(prod1)

const prod2 = {
  name: 'Mug',
  price: 15
}

Object.setPrototypeOf(prod2, Product.prototype)

prod2.increase(5)

console.log(prod2)
console.log('===========================================')