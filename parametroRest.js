
//----------PARAMETRO REST
function sumar(a,b){
    return a+b;
}
console.log(sumar);
///usando el parametro rest
function sumar1(...c){
    let resultado=c.reduce((elemt,sumador)=>elemt+sumador);
    //podemos hacer lo mismo de reduce en un for each
    let resultado2=0;
    c.forEach(function(n){
        resultado2+=n;    
    });
    //el parametro ...c va acutuar como un arreglo podiendo usar todas sus propiedades en el
    return [resultado,resultado2];
}
console.log(sumar1(1,2,3,4,5));

console.log(sumar1(1,2,3,4,5,6,7));
//----------OPERADOR SPREAD
const arr1=[1,2,3,4,5]
const arr2=[6,7,8,9,0]
///se atneponen tres puntos suspensivos  antes de ello 
const arr3=[...arr1,...arr2];
console.log(arr3);
