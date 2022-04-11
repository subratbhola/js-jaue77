console.log('call apply bind');
//we can borrow a function in Javascript using call, apply, bind method

function printFullName (x) {
  console.log(this.firstname + ' '+ this.lasteName + ' from ' + x);
}

let name1object  = {
  firstname:'subrat',
  lasteName : 'bhola'
}

printFullName.call(name1object,'berhampur'); // arguments will pass as any string

printFullName.apply(name1object, ['ganjam']) // arguments will pass in array list

let bindMethod = printFullName.bind(name1object, 'bind method');
console.log(bindMethod);

bindMethod();

console.log('end of call apply bind');
