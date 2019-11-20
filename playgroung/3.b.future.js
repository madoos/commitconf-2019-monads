const { compose } = require('ramda');
//3.b.0.-Explicación e imlementación de un funtor Future
// un funtor future es eequivalente a una promesa,
// su propiedad frok contiene una función que recive como parámetros otras dos funciones,
//rej y res
// la llamada a fork() permitirá evaluar dicha funcción y el método map permite componer la función
//que se le pase como parámetro con el res del fork

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

}

//3.b.1 Vamos a comprobar el funcionamiento de nuestro funtor future
const future1 = Future.of(5);
future1._fork(console.log,console.log);

const future2 = future1.map(x => 3 * x);
future2._fork(console.log, console.log);

//3.b.2 Vamos a comprobar que cumple las leyes asociativa e identidad:
const double = x => 2 * x;
const id = x => x;
const triple = x => 3 *x;
const plusFive = x => x + 5;

//Componemos las funciones de dos en dos:
const doubleTriple = compose(triple, double);
const triplePlusFive = compose( plusFive, triple);

//sobre nuestro funtor future1 vamos a aplicar la función identidad y comprobar si se cumple esta propiedad
future1.map(id)._fork(console.log, console.log);

//a continuación vamos a aplicar las tres funciones de forma consecutiva:
future1.map(double).map(triple).map(plusFive)._fork(console.log, console.log);
//y a través de las sucesivas composiciones
future1.map(doubleTriple).map(plusFive)._fork(console.log, console.log);
future1.map(double).map(triplePlusFive)._fork(console.log, console.log);