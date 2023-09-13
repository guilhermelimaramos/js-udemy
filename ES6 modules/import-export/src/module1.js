const name = 'Guilherme'
const lastname = 'Lima'
const age = 20

const add = (x, y) => x + y;

export default function mult(x, y){
  return x * y;
}

export class People {
  constructor(name, lastname) {
    this.name = name,
    this.lastname = lastname
  }
}

export {name, lastname, age, add}


