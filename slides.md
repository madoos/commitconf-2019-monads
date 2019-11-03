### Commit conf 2019 - monads in Javascript

--

El objetivo de este taller es implementar y entender como las mónadas nos permiten modelar efectos secundarios para mantener la mayor parte de nuestros programas puros y altamente componibles.  

--

### Perdidos en un mar de terminología
![alt text](https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/08/22/721152-reuters-boat.jpg "Logo Title Text 1")

--

## Mónada

Es un monoide en la categoría de los endofunctores 

![monada](https://massivelyop.com/wp-content/uploads/2018/04/Meme-face-thinking_538604_1.jpg)

--
## Monoide

Es un semigrupo con identidad

![monoide](data:image/png;base64,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)
--

#### Semigrupo

Es un sistema algebraico de la forma (A, +) en la cual A es un conjunto no vacío es una operación interna definida en A.

![semigrupo](https://i.pinimg.com/originals/bf/c9/e5/bfc9e5cf2aac041bfe54f8b9f4356e41.jpg)

--

### Sistema algebraico 

Es una n-tupla (a1, a2, ..., an), donde a1 es un conjunto dado no vacío, y {a2, ..., an} un conjunto de operaciones aplicables a los elementos de dicho conjunto.

![ADT](https://i.pinimg.com/originals/32/98/4f/32984fe280fcf7239d9b7f373f53423a.jpg)


--
### Desde el principio y desde la perspectiva de programadores

--

* ¿Qué es un tipo de dato algebraico?
* ¿Por qué son necesarios los ADT?
* ¿Qué son los functores?
* ¿Qué son las mónadas?

--
### ¿Qué es un tipo de dato algebraico?

Los ADTs nos permiten hacer operaciones entre datos manteniendo garantías matemáticas.
Algunos ADTs tienen una relación muy fuerte con otros. Para los programadores esto se traduce en garantías en el refactor.

--
![fl](https://github.com/fantasyland/fantasy-land/raw/master/figures/dependencies.png)
--


---
### Setoid como ejemplo de ADT

Un setoid es un tipo de dato que tiene noción de equivalencia.

```js

1 === 1 // true
'a' === 'a' // true
[1,2,3].equals([1,2,3]) // true
```

--
Pero lo interesante es que no es arbitrario, es necesario que cumpla ciertas leyes matemáticas.

* reflaxividad
* simétrico
* transitividad

```js
const x = 1
const y = 1
const z = 1

x === x // reflaxividad
x === y && y === x // simétrico
x === y && y === z && x === z // transitividad

``` 

--

### Ord como ejemplo de ADTs

Si tenemos noción de equivalencia podemos tener noción de magnitud.

Existe una relación muy fuerte entre ADTs si en un setoid le añadimos algunas reglas más obtenemos un ord.

* totalidad
* antisimetría
* transitividad

--

```js
const x = 1
const y = 2
const z = 3

x <= y || x <= y // totalidad
x <= y && y <= x // antisimetría
x <= y && y <= z && x <= z // transitividad

```
---
### mónadas

Similar a como el Ord tiene una relación muy fuerte con el Setoid, la monada tiene una relación muy fuerte con el functor. Es decir que una mónada es un functor con reglas añadidas.
--
### Functor

En teoría de categorías un funtor o functor es una función de una categoría a otra que lleva objetos a objetos y morfismos a morfismos de manera que la composición de morfismos y las identidades se preserven.

--

Para lo programadores los functores son contenedores de contextos que nos permite seguir componiendo programas con funciones puras. 

Un functor permite usar una función pura en otro contexto. Ya sea de E/S, asíncrono o condiciones de error y manejo de nulos manteniendo la composición.

-- 

---
### Práctica

* Noción de functores desde las promesas
* Implementando un funtor asíncrono
* Contextos anidados Monadas

---
