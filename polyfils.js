console.log('Polyfilss start');
function printdetails(city, country) {
  console.log(`${this.firstname} ${this.lastname} from ${city}, ${country}`);
}

let name1 = {
  firstname: 'subrat',
  lastname: 'Bhola',
};

let printname = printdetails.bind(name1, 'BAM');
printname('India');

Function.prototype.myBind = function (...args) {
  let obj = this;
  let mainObj = args[0];
  let param = args.slice(1);
  console.log(mainObj);
  return function (...arg) {
    console.log(arg);
    obj.apply(mainObj, [...param, ...arg]);
  };
};
let printbyMyBind = printdetails.myBind(name1, 'BAM');
printbyMyBind('India');

//polyfill for map

let arr = [1, 2, 3, 4, 5];
console.log(arr.map((a) => a * 2));

Array.prototype.myMap = function (callback) {
  // let arr = args;
  console.log(this);
  console.log(callback);
  // 1️⃣ Type check
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const response = [];
  for (let i = 0; i < this.length; i++) {
    response.push(callback(this[i]));
  }
  return response;
};

function callBack(el) {
  return el * 2;
}
const result = arr.myMap(callBack);
console.log(result);
console.log('Polyfilss end');
