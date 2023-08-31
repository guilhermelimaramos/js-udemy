const names = ['Guilherme', 'Pedro', 'Jennifer']

// for (char of names) {
//   console.log(char);
// }

for (let name of names) {
  console.log(name);
}

console.log('-------------------');

names.forEach(element => { 
  console.log(element);
});

console.log('-------------------');

names.forEach((element, index, array) => { 
  console.log(element, index, array);
});