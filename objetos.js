let a =new String ("hola");
const b={}
const c=new Object();
//un objeto es una coleccion de llaves y valores
const jon={
    nombre:"juan",
    apellido:"Mircha",
    edad:35,
    pasatiemp:["correr","hacer ejercisio","dar clases"],
    soltero:false,
    contacto:{
         emai:"@",
         twiter:"@",
         movil:1221221
    },    
    saludar:function(){
        console.log("hola");
    },
    decirMiNobre:function(){
        console.log(`hola mi nombre es ${this.nombre} apellido es ${this.apellido} y tengo ${this.edad} años`);
    }
}
//dentro de un objeto a las variables se les nombra atributo y a las funciones metodos
console.log(jon);
console.log(jon["nombre"]);
console.log(jon["apellido"]);
console.log(jon.edad);
console.log(jon.edad);
console.log(jon.soltero);
console.log(jon.pasatiemp[1]);
console.log(jon.contacto.emai);
jon.saludar();
jon.decirMiNobre();

//alguna propiedade o metodos

console.log(Object.keys(jon))//deveulve las llaves en un arreglo
console.log(Object.values(jon))//devuelve solo los valores de las llaves de los objetos
console.log(jon.hasOwnProperty("nombre"));//determina si hay una llave  iagual que el string y regresa boolean.
//iterar un objeto
for(let buelta in jon){
    console.log(buelta,jon[buelta]);
}