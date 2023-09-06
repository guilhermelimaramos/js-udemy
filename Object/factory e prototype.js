const say = {
  say() {
    console.log(`${this.name} is saying!!!`)
  },
}

const eat = {
  eat() {
    console.log(`${this.name} is eating!!!`)
  },
}

const drink = {
  drink() {
    console.log(`${this.name} is drinking!!!`)
  }
}


// const peoplePrototype = {...say, ...eat, ...drink};
// or
const peoplePrototype = Object.assign({}, say, drink, eat);

function createPeople (name, lastname) {
  return Object.create(peoplePrototype, {
    name: {value: name},
    lastname: {value: lastname}
  });

}

const p1 = createPeople('Guilherme', 'Lima')
const p2 = createPeople('Maria', 'Victoria')

console.log(p1)
console.log(p1.say())
console.log(p1.eat())
console.log(p1.drink())

console.log('--------------------------------------')

console.log(p2)
console.log(p2.say())
console.log(p2.eat())
console.log(p2.drink())

