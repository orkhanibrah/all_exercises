const math = require('./math.js');
const lodash = require('lodash');

const {add, multiply} = math;

console.log(lodash.orderBy([3, 5, 6, 1, 2]));
console.log(add(4, 5));
console.log(multiply(4, 5));
