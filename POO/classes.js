class People {
  constructor(name, lastname) {
    this.name = name,
    this.lastname = lastname
  }

  say () {
    console.log(`${this.name} is saying!!!`)
  }
} 

const p1 = new People('Guilherme', 'Lima')
const p2 = new People('Maria', 'Victoria')

console.log(p1)
console.log(p1.say())

console.log('---------------------------')

console.log(p2)
console.log(p2.say())