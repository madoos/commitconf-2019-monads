const { pipe } = require('ramda');

const five = Promise.resolve(5);
const one = new Promise((res,rej) => setTimeout(()=> res(1), 4000));

const id = x => x;
const double = x => 2 * x;
const pluseFive = x => x + 5;

five.then(double).then(pluseFive).then(console.log);
one.then(double).then(pluseFive).then(console.log);