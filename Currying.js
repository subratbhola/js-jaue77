function add(a, b) {
  console.log('curryinga ', a + b);
}

let add10 = add.bind(this, 10);
add10(20);

function sum(x) {
  return function (y) {
    if (y) {
      return sum(x + y);
    } else {
      return x;
    }
  };
}

sum(1)(2)();
console.log('sum ' + sum(1)(2)());

//with es6

let multiply = (a) => (b) => b ? multiply(a * b) : a;

console.log('multiply with es6 ' + multiply(1)(2)(3)());
