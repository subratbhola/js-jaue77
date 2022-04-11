
console.log("prototype start");
let parent = {
  firstname:'subrat',
  lastname:'bhola',
  getFullName : function () {
    console.log(this.firstname+this.lastname);
  }
}
console.log(parent.getFullName())

let child =  {
   firstname:'abc'
}

child.__proto__ = parent;
console.log(child.getFullName())

console.log("prototype end");