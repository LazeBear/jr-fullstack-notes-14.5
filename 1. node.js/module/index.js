const moduleA = require('./msg');
const moduleB = require('./counter');

console.log(moduleA.getMsg());
moduleB.increment();
console.log(moduleB.getCount());

// console.log(this === module.exports);
