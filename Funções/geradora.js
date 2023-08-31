function* geradora1 () {
  //code
  yield 'value 1'
  //code 2
  yield 'value 2'
  //code 3
  yield 'value 3'
}

const g1 = geradora1()

// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().done)

for (value of g1) {
  console.log(value)
}

console.log('-------------------')


function* geradora2 () {
  let i = 0;

  while(true) {
    yield i;
    i++
  }
}

const g2 = geradora2()

// for (value of g2) {
//   console.log(value)
// }

function* geradora3 () {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4 () {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4()


for (value of g4) {
  console.log(value)
}