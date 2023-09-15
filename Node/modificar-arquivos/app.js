const path = require('path');
const filepath = path.resolve(__dirname, 'test.json');
const write = require('./modules/write')
const read = require('./modules/read')


const people = [
  {name: 'Guilherme', age: 20},
  {name: 'Mavi', age: 20},
  {name: 'Vitória', age: 21},
  {name: 'Carlinhos', age: 37},
];

const json = JSON.stringify(people, '', 2)

write(filepath, json)

async function readFile(path) {
  const data = await read(path)
  rederData(data)
}

function rederData(data) {
  data = JSON.parse(data)
  data.forEach(value => console.log(value))
}

readFile(filepath)

