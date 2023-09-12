function random (min = 1000, max = 5000) {
  return Math.floor(Math.random() * (max-min) + min)
}

function wait (msg, time) {
  return new Promise((resolve, reject) => {
    if(typeof msg !== 'string') return reject('Bad value!!!')
    setTimeout(() => {
      resolve(msg)
    }, time)
  });
}

// wait('Phase 11', random())
//   .then(value => {
//     console.log(value)
//     return wait('Phase 22', random())
//     .then(value => {
//       console.log(value)
//       return wait('Phase 33', random())
//     })
//     .then(value => console.log(value))
//   })
//   .catch(e => console.log('Error: ', e))

async function execute() {
  try { 
    const phase1 = await wait('Phase 1', random())
    console.log(phase1)
  
    const phase2 = await wait('Phase 2', random())
    console.log(phase2)
  
    const phase3 = await wait('Phase 3', random())
    console.log(phase3)
  } catch(e) {
    console.log('Error: ', e)
  }
}

execute()

//pending
const test = wait('Testing...', random())
console.log(test)