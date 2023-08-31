const numbers = [12, 45, 7, 2, 74, 65, 3, 15, 21]

const total = numbers.reduce((acc, value) => acc + value, 0)

console.log(total) // 244

console.log('------------------------------')

const isPair = numbers.filter(value => value % 2 == 0)
console.log(isPair)


