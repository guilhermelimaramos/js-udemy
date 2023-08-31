const isFizz = (num) => num % 3 === 0;

const isBuzz = (num) => num % 5 === 0;

const isFizzBuzz = (num) => isFizz(num) && isBuzz(num);

const isNumber = (num) => typeof num !== "number";


const fizzBuzz = (num) => {
  if (isFizzBuzz(num)) return "FizzBuzz";
  if (isFizz(num)) return "Fizz";
  if (isBuzz(num)) return "Buzz";
  if (isNumber(num)) return "Is not a number";
  return num;
};

let i = 0;

while (i <= 100) {
  console.log(i, fizzBuzz(i));
  i++;
}