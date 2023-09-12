function random (min = 1000, max = 5000) {
  return Math.floor(Math.random() * (max-min) + min)
}

function wait (msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') return reject('Bad value!!!')
    setTimeout(() => {
      resolve(msg.toUpperCase())
    }, time)
  });
}

const promise = [
  wait('Promise 1', random()),
  wait('Promise 2', random()),
  wait('Promise 3', random())
];


//Promisse.all

Promise.all(promise)
  .then(value => {
    console.log(value)
  })
  .catch(e => console.log('Error: ', e))