const numbers = [12, 45, 7, 2, 74, 65, 3, 16, 21]

const onlyPair = numbers.filter(value => value % 2 == 0 //return Pair numbers
  ).map(value => value * 2 //returns double the pair 
  ).reduce((acc, value) => acc += value) // returns the sum of the double pairs 

console.log(onlyPair) 


