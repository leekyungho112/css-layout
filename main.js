const calulator = {
  add: function add(a, b) {
    return a + b;
  },

  minus: function minus(a, b) {
    return a - b;
  },

  multi: function multi(a, b) {
    return a * b;
  },

  divide: function divide(a, b) {
    return a / b;
  },
};

const add = calulator.add(5, 5);
console.log(add);
const minus = calulator.minus(5, 5);
console.log(minus);
const multi = calulator.multi(5, 5);
console.log(multi);
const divide = calulator.divide(5, 5);
console.log(divide);
