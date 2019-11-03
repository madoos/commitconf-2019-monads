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