class Car {
  constructor(name) {
    this.name = name
    this.speed = 0
  }

  accelerate () {
    if (this.speed >= 100) return
    this.speed++
  }

  break () {
    if (this.speed <= 0) return
    this.speed--
  }
}

const car1 = new Car('Jetta')

for (let i = 0, i)