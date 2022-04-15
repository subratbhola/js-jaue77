// function currying

function abc(x) {
  return function cbv(y){
    console.log( x+y)
  }
}

let output =  abc(4);
// let output = abc(4, 5); // this will not work
console.log('output function currying'+ output);
output(5);
