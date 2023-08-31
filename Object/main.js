const people = {
  name: 'Guilherme',
  lastname: 'Lima',
  age : '20',
  yearBirth: function() {
    const date = new Date();
    return `year birth day: ${date.getFullYear() - 21}`
  }
}

console.log(people.name)

const key = 'lastname'
console.log(people[key])

console.log(people['age'])

const yearBirth = people.yearBirth()
console.log(yearBirth)

console.log('')

for (let key in people) {
  console.log(key)
}

console.log('-----------------------------------------------')

const p1 = new Object()

p1.name = 'Mavi'
p1.lastname = 'Lazarini'
p1.age = '20'
p1.hello = function(){ return `Hello, ${this.name}`}

Object.freeze(p1)

delete p1.age;

//console.log(p1)
const hello = p1.hello()

console.log(hello)

for (let key in p1 ) {
  console.log(p1[key])
}

