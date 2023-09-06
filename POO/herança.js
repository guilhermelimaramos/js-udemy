class Device {
  constructor(name, color) {
    this.name = name,
    this.color= color,
    this.power = false
  }

  powerOn () {
    if (this.power) {
      console.log('Your device is already on...')
      return;
    }

    console.log(`${this.name} On!!!`)
    this.power = true;
  }

  powerOff () {
    if (!this.power) {
      console.log('Your device is already turned off')
      return;
    }

    console.log(`${this.name} Of!!!`)
    this.power = false;
  }
}

class SmartPhone extends Device {
  constructor(name, color, model, os) {
    super(name, color)
    this.model = model
    this.os = os
  }
}

const s1 = new SmartPhone('IPhone', 'Black', '11 plus', 'IOS')

s1.powerOn()
console.log(s1)

class Clock extends Device {
  constructor(name, color, type) {
    super(name, color),
    this.type = type
  }
}

const c1 = new Clock('Watch-pocket', 'White', 'analog')

console.log('--------------------------------------')
console.log()

c1.powerOff()
console.log(c1)
