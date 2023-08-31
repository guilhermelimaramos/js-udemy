function createMult (multiplicator) {
  return function(n) {
    return n * multiplicator
  }
};

const double = createMult(2);
const triple = createMult(3);
const quadruple = createMult(4);

console.log(double(15))
console.log(triple(9))
console.log(quadruple(4));

