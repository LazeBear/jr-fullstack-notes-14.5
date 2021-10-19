const fruit = {
  name: 'apple',
  location: {
    city: 'brisbane',
  },
};

const newFruit = { ...fruit, name: 'pear' };

fruit.location.city = 'sydney';
// {
//   name: 'pear',
//   location: {
//     city: 'brisbane',
//   },
// };

// object clone
// deep clone

// [
//   a -> 1
//   b -> 0x000001
// ]

// [
//   0x000001 -> {}
// ]

const fruit = { name: 'apple', color: 'red' };
const { name, color } = { name: 'apple', color: 'red' };

const [{ color: appleColor }, { color: pearColor }] = [
  { name: 'apple', color: 'red' },
  { name: 'pear', color: 'green' },
];

/* ----------------------------------------------*/

// function expression
const add = function (x, y) {
  return x + y;
};
// equals
const add = (x, y) => {
  return x + y;
};
// equals
const add = (x, y) => x + y;

const add = (x, y) => {
  return {
    x: x,
    y: y,
  };
};

const add = (x, y) => {
  return {
    // x: x,
    // y: y,
    x,
    y,
  };
};

const add = (x, y) => ({ x, y });

// add();

// function declaration
// function add(x, y) {
//   return x + y;
// }

/* ----------------------------------------------*/
// setTimeout(callbackFn, 1000);

function normalFunction(param) {
  console.log(param);
}
function sum(x, y, callback) {
  setTimeout(function () {
    const total = x + y;
    callback(total);
  }, 1000);
}
sum(1, 2, normalFunction);

// lexical scope

let number = 1;
function bar(cb) {
  const number = 2;
  cb(number);
}
function foo(number) {
  console.log(number);
}

// number = 100;
bar(foo); // 1

function foo() {
  const number = 1;
  return () => console.log(number);
}
const number = 100;
foo()(); // 1

// function () { } ()

(function () {})();

// module

function foo() {
  console.log(this);
}
window.foo(); // window

const calendar = {
  currentDay: 6,
  nextDay() {
    const cb = function () {
      this.currentDay++;
      console.log(this.currentDay);
    }.bind(this);
    setTimeout(cb);
  },
};
calendar.nextDay();

const object = {
  who: 'World',

  greet() {
    return `Hello, ${this.who}!`;
  },

  farewell: () => {
    return `Goodbye, ${this.who}!`;
  },
};

// object literal
// const obj = {};
const object = {};
object.who = 'World';
object.farewell = () => {};

class Teacher extends Person {
  constructor(name, age, sex) {
    super(name, age);
    this.sex = sex;
    if (!age) {
      throw new Error('');
    }
  }

  teach() {
    console.log(`${this.name} is teaching`);
  }
}

const mason = new Teacher('mason', 23, 'male');

mason.teach();

mason.toString();
