function returnFunc () {
  const name = 'Guilherme';
  return function () {
    return name
  }
}

const getName = returnFunc();

console.log(getName())