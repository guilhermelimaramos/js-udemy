import multiplicator, { name, lastname as middlename, age, add, People } from './module1'

const lastname = 'Ramos'

console.log('Name:', name, middlename, lastname)
console.log('Idade:', age)
console.log('Add:',add(20, 18))
console.log('Mult:', multiplicator(15, 4))

const p1 = new People('Mavi', 'Lazarini')

console.log(p1.name)
console.log(p1.lastname)