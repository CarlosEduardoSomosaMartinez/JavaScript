[]//esto es un tipo de dato arreglo
//diferentes manera de declarar arreglos
const arreglo=[];
const b=[1,true,"hola",[1,2,3,4,5]];
console.log(b.length);
console.log(arreglo);
console.log(b[2]);
console.log(b[3][2]);

//nuevas formas de crear elementos de arregos

const c=Array.of("X","Y","C",9,8,7);
//metod inicializar a todo el mismo valor
const d=Array(100).fill(false);
console.log(d);
//practicas que ya no se usan para definir arreglos
 const e=new Array();
 console.log(e);
 const f=new Array(1,2,3,true,false);
 console.log(f);
 //metodos de colores arreglo
 const colore=["rojo","verde","azul"];
 colore.push("negro");
 colore.pop("carlos");


 colore.forEach(function(element,inde){
    console.log(`<li id="${inde}">${element}</li>`)
 });
