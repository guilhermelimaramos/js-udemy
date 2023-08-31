const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Pear'];

for ( let i = 0; i < fruits.length; i++ ) {
    console.log(fruits[i]);
}

console.log('-------------------');

for (let i in fruits) {
    console.log(fruits[i]);
}

console.log('-------------------');

for (let fruit of fruits) {
    console.log(fruit);
}

const person = {
  name: 'Guilherme',
  lastName: 'Lima',
  age: 20,
}

console.log('-------------------');

for (let keys in person) {
  console.log(keys, person[keys]);
}