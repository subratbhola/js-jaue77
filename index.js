// Import stylesheets
import './style.css';
// import './closure.js';
// import './call-aplly-bind.js';
// import './fucntion.js';
// import './prototype.js';
// import './promies.js'
// import './design-pattern/factory.js'
// import './design-pattern/single-tone.js'
import './indexdb.js';
import './map-filter-reduce.js'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Interview Topic</h1>`;

const outputdiv = document.getElementById('result');
outputdiv.innerHTML = `<h1>JS Starter</h1><br><br>`;
console.log('hello from closure function');

var arr = [10, 20, 30, 50, 40];
const arrayofobject = [
  {
    firstname: 'subrat',
    lastname: 'Bhola',
    age: 26,
  },
  {
    firstname: 'uday',
    lastname: 'emkolla',
    age: 31,
  },
  {
    firstname: 'melwin',
    lastname: 'Manaza',
    age: 50,
  },
  {
    firstname: 'shurti',
    lastname: 'yadav',
    age: 26,
  },
];

var output = arr.map((x) => x * 2);

var resuceOutput = arrayofobject.reduce(function (accu, curr) {
  if (curr.age > 30) {
    accu.push(curr.firstname);
  }
  return accu;
}, []);

// using map, filter

const firstnames = arrayofobject
  .filter((x) => x.age > 30)
  .map((y) => y.firstname);
console.log(output);
console.log(resuceOutput);
console.log(firstnames);

//maximum value of an array

var maxValue = arr.reduce((max, curr) => {
  if (curr > max) {
    max = curr;
  }
  return max;
}, 0);

console.log(maxValue);

//dom manipulation
//document getElementById
// console.log(document.getElementsByClassName('title'));
// var title  = document.getElementsByClassName('title');
// console.log(title);

// for (var i = 0; i < title.length ; i++) {
//   console.log(title[i].innerHTML);
//   console.log(title[i].innerText); // it will only return heading tag text
//   console.log(title[i].textContent); // it will return with span also
//   title[i].innerHTML = "<span>Dom Tree Title</span>"
//   title[i].style.color = "Red";
// }

// getElementByTagName
// var liTag = document.getElementsByTagName('h4')
// console.log(liTag);
// for (var i = 0; i < liTag.length ; i++) {
//   console.log(liTag[i].innerHTML);
//   console.log(liTag[i].innerText); // it will only return heading tag text
//   console.log(liTag[i].textContent); // it will return with span also
//   liTag[i].innerHTML = "<span>Dom Tree Title</span>"
//   liTag[i].style.color = "Red";
// }

//querySelector: it will return the one Element
// var qs = document.querySelector('.list-group-item')
// console.log(qs);
// qs.innerHTML = 'helloq';

//quesrySelectorAll

var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
var even = document.querySelectorAll('.list-group-item:nth-child(even)');
console.log(odd);

for (var a = 0; a < odd.length; a++) {
  odd[a].style.backgroundColor = 'grey';
  odd[a].style.color = 'white';

  even[a].style.backgroundColor = 'lightgrey';
  even[a].style.color = 'black';
}
document.getElementById('inputText').value = 'subrat bhola';

//coockies
document.cookie =
  "cookiename='stacky';expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('./service-worker')
      .then((res) => console.log('hello service'));
  });
}

//web worker
function startWorker() {
  if (typeof 'Worker' != undefined) {
    var newWorker = new Worker();
    newWorker.onmessage((event) => {
      console.log(event.data);
      //document.getElementById('result').innerHTML =
    });
  }
}

function stopWorker() {
  newWorker.terminate();
}

var clickEvent = document.getElementById('listadd');

clickEvent.addEventListener('click', addList);

function addList(e) {
  console.log(e.target.id);
  console.log(e.target.className);
  var inputValue = document.getElementById('inputText').value;
  console.log(inputValue);
  var children = document.querySelector('.list-group').children;
  console.log(children);
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.innerText = inputValue;

  console.log(li);
  //  document.querySelector('.list-group').appendChild(li);
  //  var children= document.querySelector('.list-group').children;
  console.log(children);
  var children1 = document.querySelector('.list-group-item');
  var container = document.getElementById('listGroup');
  console.log(children1);
  console.log(container);
  container.insertBefore(li, children1);
  var odd = document.querySelectorAll('.list-group-item:nth-child(odd)');
  var even = document.querySelectorAll('.list-group-item:nth-child(even)');
  console.log(odd);

  // for (var a = 0; a < odd.length;a++){
  //   odd[a].style.backgroundColor = 'grey';
  //   odd[a].style.color = 'white';

  //   even[a].style.backgroundColor = 'lightgrey';
  //   even[a].style.color = 'black';

  // }
}
console.log(clickEvent);

let abc = [1,2,3];
let b = [...abc] //immutable

let obj1 = {
  name:123,
  age:234
}

let obj2 = Object.assign({}, obj1) //immutable


