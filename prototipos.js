//poo
/**clases es un modelo as segir 
 * objetos--es una instacia de una clase es una copia de ese modelo
 * {
 * atributos variables dentro de un objeto 
 * metodos funciones
 * } 
 * */
const animal={
    nombre:"snoopy",
    sonar(){
        console.log("hago sonido por que estoy vivo")
    }
}
const animal2={
    nombre:"lolabunny",
    sonar(){
        console.log("hago sonido por que estoy vivo")
    }
}
console.log(animal);
console.log(animal2);
//Funcion Constructoras
function Animal(nombre,genero){
    this.nombre =nombre;
    this.genero=genero;
}
//asignando metodos al prototipo de la funcion animal
Animal.prototype.sonar=function(){
    cosnoel.log("hago ruidos");
}




const animal11=new Animal("Snoopy","macho");
const animal22=new Animal("lolabunny","hembra");
console.log(animal);
console.log(animal2)