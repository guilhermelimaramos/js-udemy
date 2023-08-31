const numbers = [12, 45, 7, 2, 74, 65, 3, 15, 21]

const double = numbers.map(value => value % 2 == 0 ? 'par' : 'impar')

console.log(double)

console.log('-----------------')

const people = [
  {name: 'Guilherme', age: 20},
  {name: 'Mavi', age: 20},
  {name: 'Vitória', age: 20},
  {name: 'Luiz', age: 32},
  {name: 'Ana', age: 24}
];

const onlyName = people.map(obj => obj.name)
console.log(onlyName)

// const deleteName = people.map(obj => {
//    delete obj.name
//    return obj
// });
//console.log(deleteName)

const addId = people.map((obj, indice) => {
  obj.id = indice + 1000 
  return obj
});
console.log(people)