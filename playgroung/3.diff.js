const seven = Promise.resolve(7);

const idPromise = x => Promise.resolve(x);

console.log(seven.then(idPromise));

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

const five = Functor.of(5);

const idFunctor = x => Functor.of(x);

console.log(five.map(idFunctor));

const f = p => p.then(n => n *2);
seven.then(f);