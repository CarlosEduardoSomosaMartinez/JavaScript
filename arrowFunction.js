//funcion expresada
const saludo=function(){
    console.log("hola");
}
saludo();
 //funcion flecha para saludar

 const saludar=(nombre)=>console.log(`hola ${nombre}`);
 saludar ("lrma");

 const sumar=(a,b)=>a+b;
 


 console.log(sumar(10,9))
const numeros=[1,23,3,4];
numeros.forEach((elemento,index)=>console.log(`${elemento} indice ${index}`))
//lar arrow funcition caputarn el contexto this de donde se encuntran
function perro(){
    console.log(this);
}
perro();

const perro1={
    nombre:"perro",
    ladrar:()=>{
        console.log(this);
    }
}