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

//Promisse resolve

function downloadPage () {
  const inCache = true

  if (inCache) {
    return Promise.resolve('cached page')
  } else {
    return wait('downloaded the page', 3000)
  }
}

downloadPage()
  .then(dataPage => {
    console.log(dataPage)
  })
  .catch(e => console.log('Error: ', e))