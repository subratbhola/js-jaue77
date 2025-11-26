console.log('call apply bind');
//we can borrow a function in Javascript using call, apply, bind method

function printFullName(x) {
  console.log(this.firstname + ' ' + this.lasteName + ' from ' + x);
}

let name1object = {
  firstname: 'subrat',
  lasteName: 'bhola',
};

printFullName.call(name1object, 'berhampur'); // arguments will pass as any string

printFullName.apply(name1object, ['ganjam']); // arguments will pass in array list

let bindMethod = printFullName.bind(name1object, 'bind method');
console.log(bindMethod);

bindMethod();

console.log('end of call apply bind');

//interview quest
const obj = { x: 42 };

function getX() {
  return this.x;
}

const a = getX;
const b = getX.bind(obj);

console.log(a()); //undefined ?
console.log(b()); // 42 ?

const module1 = {
  x: 10,
  getX() {
    console.log(this.x);
  },
};

const unbound = module1.getX;
const bound = module1.getX.bind(module1);

unbound(); // undefined?
bound(); // 10?

const user = {
  name: 'Subrat',
  sayHi() {
    console.log('Hi,', this.name);
  },
};

setTimeout(user.sayHi, 1000); // ?
setTimeout(user.sayHi.bind(user), 1000); // ?
