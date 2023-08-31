const person = {
  name: 'Guilherme',
  lastName: 'Lima',
  age: 20,
  address: { 
    street: 'Eduardo Leite',
    number: 851,
    city: 'Ribeião Preto',
    state: 'SP',
  }, 
};

const { name, lastName, age: a, address: { street, number, city, state: st} } = person;
console.log(name, lastName, a, street, number, city, st);

//console.log(`Name: ${person.name} ${person.lastName}`);
