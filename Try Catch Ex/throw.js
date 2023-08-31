

function add (x, y) {
  if ( typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x and y must be numbers')
  }
  return x + y;
}


try {
  add(5, 2)
  console.log(add(5, 2))
} catch (e) {
  console.log(e.message)
}
