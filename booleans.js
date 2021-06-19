let verdadero=true;
let falso=false;
let v=Boolean(true);
let f=Boolean(false);

console.log(verdadero);
console.log(falso);

/** valores que tiende a verdadero o falso se le llama  trythy y falsy 
 * tienden a verdadero
 * if(true)
 * if({}) objeto unque sea vacio es verdadero
 * if(42) numero 
 * if("foo")cadena de texto aunque esta solo contenga espacios
 * if(new Date())una fecha
 * if(-42)un numero auque sea negativo 
 * if(infinity) valores que tienden hacia el infinito
 * if(-infinity)valores que tienden hacia el infinito negativo
 * tienden a falso
 * if(false) 
 * if(null)valor nulo
 * if(undefined)valor indefinido
 * if(0)cero
 * if(-0)cero negativo
 * if(0n) un  cero dato de bigint
 * if(NaN)no es un numero tiende a ser falso
 * if("")cadena vacia
*/