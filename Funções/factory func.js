function createPeople (name, lastname) {
  return {
    name, 
    lastname,
    love: function(about) {
      return `${name}, I love you ${about}`
    }
  }
};

const p1 = createPeople('Mavi', 'Lazarini');

console.log(p1.love('so much'));

function calcImc (name, lastname, w, h) {
  return {
    name,
    lastname,
    weight : w,
    height: h,

    //Getter
    get completeName() {
      return `${this.name} ${this.lastname}`
    },

    //Setter
    set completeName(value) {
      value = value.split(' ')
      this.name = value.shift()
      this.lastname = value.join(' ')
      
    },

    //Getter
    get imc() {
      const imc = this.weight / (this.height ** 2)
      return imc.toFixed(2)
    }
  }
}

p2 = calcImc('Maria', 'Lazarini', 72, 1.77)
// console.log(p2.completeName) 
// console.log(p2.imc);

p2.completeName = 'Guilherme Lima';

console.log(p2.completeName)

console.log(p2.name)
console.log(p2.lastname)