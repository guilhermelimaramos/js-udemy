// // exports.multi = function name(x, y) {
//   return x * y;
// }

module.exports = class Dog {
  constructor(name) {
    this.name = name
  }

  latir() {
    console.log(`${this.name} está fazendo au au!!!`)
  }
}