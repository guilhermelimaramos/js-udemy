const product = {
  name: 'Mug', 
  price: 15,
}


const p1 = product
p1.name = 'Mouse'

console.log(p1)
console.log(product)

console.log('===================================')

//spread
const p2 = {...product, color: 'undefined', quantity: 0 }
p2.price = 30
p2.name = 'Shoes'
p2.color = 'Black'
p2.quantity = 20

console.log(product)
console.log(p2)

console.log('===================================')

//Object.assign()
const p3 = Object.assign({}, product, {manufacturer: 'undefined', year: 'undefined'})

p3.manufacturer = 'Razer'
p3.price = 600
p3.year = 2022

console.log(product)
console.log(p3)

console.log('===================================')

//Object.getOwnPropertyDescriptor() and Object.defineProperty


Object.defineProperty(p3, 'manufacturer', {
  writable: false,
  configurable: false
});

console.log(Object.getOwnPropertyDescriptor(p3, 'manufacturer'))

p3.manufacturer = 'Redragon' //denied
delete p3.manufacturer //denied
delete p3.year // ok

console.log(Object.values(p3))
//console.log(Object.entries(p2))
console.log()

for (let [key, value] of Object.entries(p2)) {
  console.log(`${key}: ${value}`)
}