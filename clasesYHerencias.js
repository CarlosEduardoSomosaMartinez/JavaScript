class Animal{
    constructor(nombre,genero){
        this.nombre=nombre;
        this.genero=genero;
    }
    sonar(){
        console.log("hago sonidos de esto");
    }
    saludar(){
        console.log("hola")
    }
}
const mimi= new Animal("mimi","hembra"),
scoby=new Perro("macho","hembra","gigante");
class Perro extends Animal{
    constructor(nombre,genero,tamanio){
        super(nombre,genero);
        this.tamanio=tamanio;
    }
    sonar(){
        console.log("yo ladro");
    }
    ladrar(){
        console.log("GUAGUA")
    }
}