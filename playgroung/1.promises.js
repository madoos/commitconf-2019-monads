// concepto de funtores desde promesas:
//0.-Vamaos a importar algunas funciones de ramda que nos van a servir de ayuda:
const { compose, pipe } = require('ramda');

//1.a.-ejercicio: implementa una promesa que devuelva un valor numérico al cabo de 5 seg
const promise1 = new Promise((res, rej) => {
  setTimeout(() => res(5), 2000);
});

//1.b.alternativamente, podemos crear una promesa que "envuelva" y guarde de forma segura nuestro valor
//¿cómo harías esto?
const promise2 = Promise.resolve(7);

promise1.then(console.log);
promise2.then(console.log);

//2.- ¿Qué nos interesa en pf?
// nos interesa transformar esos valores a través del paso de funciones
// cuando trabajamos conpromesa empleamos el método "then" que nos permite tranforma los valores
// envueltos en nuestro contexto de promesas a través del paso de funciones. Vamos a verlo:

//2.a.- Vamos a definir cuatro funciones: id, double, suaqre y plusTwo y vamos a ver como se transforma nuestro valor envuelto en la promesa:
const id = x => x;
const double = x => 2 * x;
const square = x => x * x;
const plusTwo = x => x + 2;  

//2.b-Vamos a ver como estas promesas trnaforman los valores envueltos en nuestras promesas originales
promise1.then(id).then(console.log);
promise2.then(square).then(console.log);

//2.c.-También podemos aplicar varias de estar funciones para lograr transformaciones sucesivas:
promise1.then(id).then(double).then(console.log);
promise2.then(square).then(double).then(plusTwo).then(console.log);

//3.-Estas sucesivas transformaciones, también se pueden llevar a cabo mediante la composición de las funciones originales
//y su aplicación directa.
//3.a.-Vamos a componer las funciones anteriormente aplicadas:
const idDouble = compose (double, id);
const squareDoublePlusTwo = compose(plusTwo, double, square);

//3.b.-Vamos a comprobar que la composición de funciones y su aplicación a las promesas mediante then son equivalentes:
promise1.then(idDouble).then(console.log);
promise2.then(squareDoublePlusTwo).then(console.log);

//El método then de las promesas hace que podamos trabajar con estructuras de "tipo funtor",que permiten transformar valores 
//envueltos en contextos seguros y con lógica propia. Además permiten la composición y sucesiva aplicación de funciones

//En el siguiente bloque de ejercicios vamos a implementar nuestra propia ADT de tipo functor, similar a una promesa
//que nos permita de las misma forma componer funciones y respetar tanto la identidad como la propiedad asociativa
