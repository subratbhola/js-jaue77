// =================remove item a element from given occurtence==============

let arr = ['a','c','b','a','c','a','d','c'];

function removelement(item, occurence){
  console.log(item +'==='+ occurence);
  let itemarray = [];
  for (let i = 0;i<arr.length;i++) {
    if (arr[i] === item){
      itemarray.push(i);
    }
  }
  console.log(itemarray);

  arr.splice(itemarray[occurence-1],1)
  console.log(arr);
}
removelement('a',2);
// =================Reverse a string==============
var abc = 'my name is subrat';
var splitvalue = abc.split(' ');

var output = '';
for (let i = 0;i<splitvalue.length;i++){
	let val = splitvalue[i].split('').reverse().join('');

if (i === 0) {
output+=val;
}
else {
	output +=' '+val;
}
	
}

console.log(output)

// ==========remove duplicate ===========


// ========== String Polindrom ===========

let polivalue = 'heehe';

if (polivalue.split('').reverse().join('') === polivalue){
  console.log('polinfrom');
} 
