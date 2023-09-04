function Product(name, price) {
  this.name = name,
  this.price = price
}

Product.prototype.increase = function(value) {
  this.price += value
}

Product.prototype.descount = function(value) {
  this.price = this.price - (this.price * (value / 100))
}

// const prod1 = new Product('Mouse', 200)

// prod1.increase(20)
// prod1.descount(30)
// console.log(prod1)

function Tshirt (name, price, color) {
  Product.call(this, name, price)
  this.color = color
}

// Object.setPrototypeOf(Tshirt.prototype, Product.prototype)
Tshirt.prototype = Object.create(Product.prototype)

const genProd = new Product('undefined', null)
const tshirt1 = new Tshirt ('Tank Top', 50, 'White')

tshirt1.increase(8)
console.log(tshirt1)
console.log(genProd)

console.log('====================================')

function Mouse (name, price, dpi, wirelles, quantity) {
  Product.call(this, name, price);
  this.dpi = dpi,
  this.wirelles = wirelles

  Object.defineProperty(this, 'stock', {
    enumerable: true,
    configurable: false,
    get: function() {
      return stock
    },
    set: function(value) {
      if (typeof value !== 'number') return;
      stock = value;
    }
  })
}

Mouse.prototype = Object.create(Product.prototype)
Mouse.prototype.constructor = Mouse

const m1 = new Mouse('g403', 280, 1600, true )

m1.increase(20) 
m1.descount(10)

m1.stock = 50; //setter

console.log(m1)
console.log(m1.stock) //getter