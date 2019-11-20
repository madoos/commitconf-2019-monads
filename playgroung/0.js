class Monad {
    constructor(value){
        this._value = value;
    }

    static of(value){
        return new Monad(value)
    }

    map(f){
        return new Monad(f(this._value))
    }

    join(){
        return this._value ? this._value : null;
    }

    chain(f){
      return this.map(f).join();  
    }

    ap(monad){
        return this.chain(monad.join())
    }
}

// console.log(Monad.of(5));

// const monad1 = Monad.of(5);

// const functionBind = (value) => Monad.of(value);

// const monad2 = monad1.chain(functionBind);

// console.log(monad2);

const a = Promise.resolve(5);
const b = Promise.resolve(a).then(;