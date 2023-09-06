const _speed = Symbol();

class Car {
  constructor(name) {
    this.name = name,
    this[_speed] = 0
  }

  set speed (value) {
    if (typeof value !== 'number') return;
    if (value < 0 || value >= 100) return;

    this[_speed] = value
  }

  get speed () {
    return this[_speed]
  }

  accelerate () {
    if (this[_speed] >= 100) return
    this[_speed]++
  }

  break () {
    if (this[_speed] <= 0) return
    this[_speed]--
  }
}

const car1 = new Car('Jetta')

for (let i = 1; i <= 200; i++ ) {
  car1.accelerate()
}

for (let i = 1; i <= 50; i++ ) {
  car1.break()
}

car1.speed = 70

console.log(car1.speed)