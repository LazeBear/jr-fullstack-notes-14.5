// REPL
// READ, EVALUATE, PROCESS, LOOP = LANGUAGE SHELL
const moduleA = { exports: {} };
const moduleB = { exports: {} };

(function (module) {
  const msg = 'secret msg';

  function getMsg() {
    return msg;
  }

  module.exports = { getMsg };
})(moduleA);

(function (module) {
  let count = 1;

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  module.exports = { increment, getCount };
})(moduleB);

console.log(moduleA.exports.getMsg());
moduleB.exports.increment();
console.log(moduleB.exports.getCount());

// globalThis
// global
