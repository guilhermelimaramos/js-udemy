function randomInt(min, max) {
    const r = Math.floor(Math.random() * (max - min + 1)) + min;
    return r;
}

let rand = randomInt(1, 5)

while (rand !== 4) {
    rand = randomInt(1, 5)
    console.log(rand)
}

console.log('------------------')

do {
  rand = randomInt(1, 5);
  console.log(rand);
}while(rand !== 4);