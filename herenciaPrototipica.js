function Animal(nombre,genero){
    this.genero=genero;
    this.nombre=nombre;
}
Animal.prototype.sonar=function(){
    console.log("estos animales hace estos sonidos");
}
//herencia prototipica
function Perro(nombre,genero,tamaño){
    this.super=Animal;
    this.super=(nombre,genero);
    this.tamaño=tamaño;
}
Perro.prototype=new Animal();
Perro.prototype.constructor=Perro;
Perro.prototype.sonar=function(){
    console.log("gua gua gua")
}
Perro.prototype.ladrar=function(){
    console.log("g u a");
}
const snoppu =new Perro("snoppy","macho","mediano");
console.log(snoppu);
