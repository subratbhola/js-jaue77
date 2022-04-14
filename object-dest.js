let oj3 = {
  name:'hygh',
  age: 25,
  adress:{ 
    city:'ganjam'
  }
}

// object destructuring

const {name, age:a, adress: {city}} = oj3;
console.log(name);
console.log(a);
console.log(city);

arr= [1,2,5];

const [x,,y]=arr;

console.log(x);
console.log(y);

