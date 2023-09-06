const peoples = [
  {id: 3, name: 'Guilherme'},
  {id: 2, name: 'Mavi'},
  {id: 1, name: 'Vitória'}
];

// const newPeople = {}

// for (const people of peoples) {
//   const {id} = people
//   newPeople[id] = {...people}
// }

const newPeople = new Map()

for (const people of peoples) {
  const {id} = people
  newPeople.set(id,  {...people})
}

console.log(newPeople)

console.log(newPeople.get(2))

newPeople.delete(3)

for ([identifier, {id, name}] of newPeople) {
  console.log(identifier, {id, name})
}