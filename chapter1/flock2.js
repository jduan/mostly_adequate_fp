const add = (flockX, flockY) => flockX + flockY;
const multiply = (flockX, flockY) => flockX * flockY;

const flockA = 4;
const flockB = 2;
const flockC = 0;
const result = multiply(flockB, add(flockA, flockA))

console.log(result == 16)
