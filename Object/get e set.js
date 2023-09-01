//Constructor Function
function Product (name, price, stock) {
  this.name = name,
  this.price = price

  let stock_ = stock

  Object.defineProperty(this, 'stock', { 
    enumerable: true,
    configurable: true,
    get: function() {
      return stock_
    },
    set: function(value) {
      if (typeof value !== 'number') {
        console.log('Insert the number');
        return
      }

      stock_ = value;
    }
  });
};

const prod1 = new Product('TV', 2000, 20);
// delete prod1.stock
prod1.stock = 'Corsa'
//console.log(prod1)
//console.log(Object.keys(prod1))
// console.log(prod1);
console.log(prod1.stock)


/////////////////////////////////////////////////////////////////////////////////

//Factory Function

function createProduct (name) {
  return {
    get name() {
      return name;
    },
    set name(value) {
      name = value;
    }
  }
}

const prod2 = createProduct('Keyboard')


console.log(prod2)
console.log(prod2.name)