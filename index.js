// Import stylesheets
import './style.css';
import './closure.js'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
console.log("hello from closure function");

var arr = [10,20, 30, 50, 40];
const arrayofobject = [
  { 
    "firstname": "subrat", 
    "lastname": "Bhola", 
    "age": 26 
  }, 
  { 
    "firstname": "uday", 
    "lastname": "emkolla", "age": 31
  }, 
  { 
    "firstname": "melwin", 
    "lastname": "Manaza", 
    "age": 50 
  }, 
  { 
    "firstname": "shurti", 
    "lastname": "yadav", 
    "age": 26 
  }
]

var output = arr.map((x)=>x*2);

var resuceOutput = arrayofobject.reduce(function (accu, curr) {
  if (curr.age > 30) {
    accu.push(curr.firstname)
  }
  return accu;
},[]) ;

// using map, filter

const firstnames = arrayofobject.filter((x)=>x.age >30).map((y)=>y.firstname);
console.log(output);
console.log(resuceOutput);
console.log(firstnames);

//maximum value of an array

var maxValue = arr.reduce((max, curr)=> {
  if (curr > max) {
    max = curr;
  }
  return max;
},0);

console.log(maxValue);

//coockies
document.cookie="cookiename='stacky';expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker').then(res => console.log("hello service"))
  });
}

