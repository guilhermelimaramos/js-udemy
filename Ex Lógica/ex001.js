function Bigger(a, b) {
  return a > b ? a : b;
  // if (a > b)return a;
  // return b;
}

const bigger2 = (a, b) => a > b ? a : b;

const bigger = bigger2(11, 50);

console.log(bigger);

console.log(bigger2);