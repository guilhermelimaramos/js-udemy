class RemoteControl {
  constructor(tv) {
    this.tv = tv,
    this.volume = 0;
  }

  volumeUp () {
    if (this.volume >= 0 && this.volume < 100) this.volume += 2;
    
    return
  }

  volumeDown () {
    if (this.volume >= 0 && this.volume < 100) this.volume -= 2;
    
    return
  }

  static batteryChange () {
    console.log('Changed battery...')
  }
}

const control1 = new RemoteControl('LG')

control1.volumeUp();
control1.volumeUp();
control1.volumeUp();
control1.volumeUp();
control1.volumeUp();
control1.volumeUp();

RemoteControl.batteryChange()

console.log(control1.volume)