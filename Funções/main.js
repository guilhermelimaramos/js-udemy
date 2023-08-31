// function SayHello() {
//   console.log('Hello');
// }

// SayHello();

// const func = function () {
//   console.log("I'm a function");
// };

// function execFunc (func){
//   func()
// }
// execFunc(func)

// arrowFunc = () => {
//   console.log("I'm a arrow function")
// }

// arrowFunc();

// const product = {
//   name: "TV",
//   model: "LG",
//   desc: function() {
//     console.log("UHD 4K")
//   }
// };

// console.log(`Name:${product.name}, Model: ${product.model}`)

// console.log(product.desc())

function func() {
  total = 0;
  for (args of arguments){
    total += args
  }
  return total;
}

console.log(func(20, 45, 2 , 18, 15));

function account (operator, acumulator, ...numbers) {
  for (let numbs of numbers) {

    if (operator === '+') acumulator += numbs
    if (operator === '-') acumulator -= numbs
    if (operator === '/') acumulator /= numbs
    if (operator === '*' || operator === 'x') acumulator *= numbs
  }
  console.log(acumulator)
}

account('*', 1, 10, 20, 30, 40)