# Commit conf 2019 - monads in Javascript
Índice de ejercicios:
==========================================
1. Noción de funtores desde las promesas
    * Promesas
        - Equivalencia "map" <=> "then"
        - Composición utilizando "then"
        - Leyes asociativa y elemento neutro
    * Funtor básico
        - Implementación
        - ¿Cumple la asociativa y el elemento neutro?
2. Funtor asíncrono
    * Implementación
    * Leyes 
    * Uso
3. Contextos anidados mónadas
    * Concepto de contexto anidado
    * Mónada Maybe
        * Funtor Maybe (explicación e implementación)
        * Leyes matemáticas
        * Usos y aplicaciones
    * Mónada IO
        * Funtor IO (explicación e implementación)
        * Leyes matemáticas
        * Usos y aplicaciones
    * Aplicación breve con ambas ¿? (Esto creo que no va a dar tiempo) 

> He pensado incluir en el repo algunas estructuras básicas (como la de funtor maybe 
> o funtor IO) y archivos de tests que al ejecutarse comprueben que se cumplen las leyes
> asociativa, elemento neutro, etc. 