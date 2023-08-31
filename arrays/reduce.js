const numbers = [11, 42, 7, 2, 74, 65, 3, 15, 21]

const total = numbers.reduce((acc, value) => acc + value, 0)

console.log(total) // 244

console.log('------------------------------')

const addOnlyPair = numbers.reduce((acc, value) => {
  if (value % 2 == 0) acc += value;
  return acc
}, 0)
console.log(addOnlyPair)

console.log('-----------------------------')

const double = numbers.reduce((acc, value) => {
  acc.push(value * 2);
  return acc
}, [])
console.log(double)

console.log('---------------------------------')

console.log('---------------------------------')

console.log('---------------------------------')


const people = [
  {name: 'Guilherme', age: 27},
  {name: 'Mavi', age: 20},
  {name: 'Vitória', age: 25},
  {name: 'Luiz', age: 42},
  {name: 'Ana', age: 32}
];

const older = people.reduce((acc, value) => {
  if (acc.age > value.age) return acc;
  return value
  
},0)

console.log(older)

