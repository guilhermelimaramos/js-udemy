const name = 'Mavi';

(function () { 

  function sayHello(name) {
    return 'Hello, ' + name;
  }

  function print() {
    console.log(sayHello('mavi <3'));
  }

  print();
})();

// console.log(name); 