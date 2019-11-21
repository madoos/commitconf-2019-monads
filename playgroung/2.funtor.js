const { pipe } = require('ramda');

class Functor  {
  constructor(value){
    this.value = value;
  }

  static of(value){
    return new Functor(value);
  }

  map(f){
    return new Functor(f(this.value));
  }
}

// funtor
const one = Functor.of(1);

//identidad 
const id = x => x

console.log(one);
console.log(one.map(id));

//composición
const double = x => x * 2;
const plusFive = x => x + 5;
const doublePlusFive = pipe(double, plusFive);

console.log(one.map(double).map(plusFive));
console.log(one.map(doublePlusFive));

