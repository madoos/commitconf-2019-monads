//Implementación del tipo monádico Future
//partimos del funtor implementado en el caso anterior
//añadimos los métodos join y chain acompañados de una explicación sobre contextos seguros

const { compose } = require('ramda');

class Future {
    constructor(fork){
        this._fork = fork;
    }

    static of(value){
        return new Future((rej, res) => res(value))
    }

    map(f){
        return new Future((rej, res) => {
            return this._fork(rej, compose(res, f))
        })
    }

    chain(f){
        return new Future((rej,res) => {
            return this._fork(rej, x => f(x)._fork(rej, res))
        })
    }

    ap(future){
        return this.chain(fn => future.map(fn)); 
    }

}

//comprobar cómo el funcionamiento básico de nuestro chain
const doubleMonad = x => Future.of(2 * x);
const idMonad = x => Future.of(x);

const future1 = Future.of(5);
//future1.chain(idMonad)._fork(console.log, console.log);
//future1.chain(doubleMonad)._fork(console.log, console.log);

//vamos a comprobar que cumple las leyes matmáticas que tiene que cumplir
//leyes del funtor aplicativo:
//identidad, homeomorfismo e intercambio
const futureId = Future.of(x => x);
futureId.ap(future1)._fork(console.log, console.log);
Future.of(x => 3 * x).ap(Future.of(6))._fork(console.log, console.log);
Future.of(18)._fork(console.log, console.log);

//leyes del método chain:
//asociativa:
const plusFiveMonad = x => Future.of(x + 5);
const composedMonad = x => Future.of( 2 * x + 10);
future1.chain(plusFiveMonad).chain(doubleMonad)._fork(console.log, console.log);
future1.chain(composedMonad)._fork(console.log, console.log);
