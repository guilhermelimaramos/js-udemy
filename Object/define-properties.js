function Product (name, price, stock) {

  Object.defineProperty(this, 'stock', { 
    enumerable : true, //show the key
    value: stock, // add new key 
    writable: false,//not modify key value
    configurable: false
  });

  Object.defineProperties(this, {
    name: {
      enumerable: true,
      value: name,
      writable: false,
      configurable: true
    },
    price: {
      enumerable: true,
      value: price,
      writable: false,
      configurable: false
    }
  })
};

const prod1 = new Product('TV', 2000, 10);

delete prod1.stock
prod1.stock = 76

//console.log(prod1)

console.log(Object.keys(prod1))

console.log(prod1)

 