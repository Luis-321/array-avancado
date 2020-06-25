const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [7, 8, 9];
// const conc = a1.concat(a2, a3, [10, 11, 12]);
const conc = [...a1, ...a2, ...a3]; //...Rest -> ... Spread

console.log(conc);