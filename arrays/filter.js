const numbers = [12, 45, 7, 2, 74, 97, 3, 15, 21]

// let gt10 = []

// for (i in numbers) {
//   if (numbers[i] > 10) {
//     gt10.push(numbers[i])
//   }
// }

const numbsFilter = numbers.filter(value => value > 10 );

console.log(numbsFilter)

console.log('-------------------------')

const people = [
  {name: 'Guilherme', age: 20},
  {name: 'Mavi', age: 20},
  {name: 'Vitória', age: 20},
  {name: 'Luiz', age: 32},
  {name: 'Ana', age: 24}
];

const longName = people.filter(value => value.name.length > 5 || value.age > 30 || value.name.toLowerCase().endsWith('a'))

console.log(longName)