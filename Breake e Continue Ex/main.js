const numbers = [1,2,3,4,5,6,7,8,9];

const lenght = numbers.length;

console.log('Lenght: ', lenght)

for (let num of numbers)
{
  if (num === 2 ){
    console.log('Jumping number 2');
    continue;
  }

  if (num === 5) {
    console.log('Jumping number 5');
    continue;
  }

  if (num === 9) {
    console.log('Breaking at number 7');
    break;
  }

  console.log(num);
}