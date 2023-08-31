function Product (name, price, stock) {
  this.name = name,
  this.price = price
  

  Object.defineProperty(this, 'stock', { 
    enumerable : true, //show the key
    value: stock, // add new key 
    writable: false,//not modify key value
    configurable: false

  });
};

const prod1 = new Product('T-shirt', 30, 3);

delete prod1.stock
prod1.stock = 76

//console.log(prod1)

console.log(Object.keys(prod1))

 