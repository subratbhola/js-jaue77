// function currying

function abc(x) {
  return function cbv(y){
    console.log( x+y)
  }
}

let output =  abc(4);
console.log('output function currying'+ output);
output(5);
