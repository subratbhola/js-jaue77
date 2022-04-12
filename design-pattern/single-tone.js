let instance = null;
console.log('single tone');
class Car {
  constructor(name, color) {
    if (instance == null) {
      this.name = name;
    this.color = color;
    instance = this;
    } else {
      return instance;
    }
  }
}

var mercedes = new Car('marc', 'red');
var bmw = new Car('bmw', 'white');
console.log(mercedes);
console.log(bmw);
