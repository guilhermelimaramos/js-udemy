function random (min = 1000, max = 5000) {
  return Math.floor(Math.random() * (max-min) + min)
}

function wait (msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') reject('Bad value!!!')
    setTimeout(() => {
      resolve(msg)
    }, time)
  });
}


wait('Phrase 1', random())
  .then(awser => {
    console.log(awser);
    return wait(212121, random())
  })
  .then(awser => {
    console.log(awser)
    return wait('Phrase 3', random())
  })
  .then(awser => {
    console.log(awser)
  })
  .then(() => console.log('All OK!!!'))
  .catch(e => console.log('Error: ' + e))