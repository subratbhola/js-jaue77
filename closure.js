console.log("closure");
function x() {
  var a = 5;
  function y() {
    console.log(a);
  }
  y();
}
x();
console.log(x);

//sum of closure chaining
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      
      return function(d){
      
        return a + b + c + d + e;
      }
    }
  }
}
console.log(sum(1)(2)(3)(4));

