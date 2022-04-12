console.log('factory pattern')

function Emplolyee(name, type) {
  this.name = name;
  this.type = 'employee';
}

function customer(name, type) {
  this.name = name;
  this.type = 'customer';
}

function fulltype() {
  console.log('my name is '+this.name+'i m in '+this.type)
}

function creatFactory () {
 this.create = function create(name, type) {
    switch(type){
      case 1:
        return new Emplolyee(name)
        break;
        case 2:
         return new customer(name)
          break;
    }
  }

}

var factory = new creatFactory();
var employee = [];
employee.push(factory.create('subrat',1));
employee.push(factory.create('bhola',2));
console.log(employee);

employee.forEach((items)=> {
  fulltype.call(items)
})

