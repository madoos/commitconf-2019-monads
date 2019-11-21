Esquema:

  -Promesas: 
  ===========================================================================================================
  >Las promesas nos permiten trabajar con funciones de primer orden que se pasan como argumentos a través de su método
  >then y que se aplicarán sobre los datos recibidos por la promesa de forma asíncrona.
  >La pf se centra en la utilización y composición de funciones puras para obtener una aplicación final
  >Vamos a ver algunos ejemplos de cómo se pueden utilizar las funciones como entes de primer orden
  >a través del método then de las promesas que luego nos permitirán ver las analogías tanto con **funtores**
  >como con **mónadas** que son el principal objetivo de este taller.

  Ej -> 1.promises.js

 -Funtores: 
 ===========================================================================================================
 >De manera similar, un funtore es un __contenedor de contextos__ que nos va a permitor trabajar con funciones puras y de primer orden
 >aportando las siguientes ventajas:

    *Funciones universales (reutilización).
    *Contextos seguros (en los que se lleve a cabo el manejo de errores, se traten adecuadamente los datos de tipo null, etc);

  Ej -> implementación de un funtor Identidad -> 2.funtorId.js

  >Para que nos sean realmente útiles de cara a la composición y reutilizaión de nuestras funciones, necesitaremos que dichos funtores cumplan
  >con una serie de reglas: la composición y la identidad

  Ej -> 2.reglas.js

  -Diferencias funtor-promesas:
  ===========================================================================================================
  >Llegados a este punto nos preguntamos: __¿Es lo mismo un funtor que una promesa?__
  >La respuesta es __No__, pero __¿por qué?__, veámoslo:

      *Las promesas no cumplen la identidad por la izquierda;
      *Las promesas son ansiosas
      *Las promesas aplanan

  Ej -> 3.diferencias.js

  -Reto:

  >Ahora os pedimos que resolvais los retos que os proponemos en el siguiente codepen:

  https://codepen.io/madoos/pens/public?grid_type=list

  1. El primer reto cocnsiste nada más que en la implementación de un funtor id como el que hemos visto previamente y que comprobeis que cumple las reglas adecuadas para la composición y reutilización de funciones, a saber: composición e identidad
  2. Un poco más complejo: os pedimos que implementeis y utiliceis un funtor Future. Este tipo de funtores, son similares a las promesas solo que con los valores cambiados. Son estructuras, como veis, cuya propiedad fork es una función que recive dos parámetros, dos funciones, la primera que rej y la segunda res (al contrario que las promesas). En este caso el método map ha de devolver una estructura también de tipo future, que cuando reject el dato, contenga la misma función de rej, pero cuyo resolve sea el resolve de la función aplicada sobre el dato.

