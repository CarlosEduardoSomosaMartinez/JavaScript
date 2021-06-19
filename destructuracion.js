const numeros=[1,2,3,4,5,6,7,8,9];
let uno=numeros[0],
    dos=numeros[1],
    tres=numeros[2];
//usando destructuracion
const [one,two,three]=numeros;
console.log(one,two,three);

let persona={
    nombre:"carlos",
    apellido:"somosa",
    edad:35
}
let{nombre,apellido,edad}=persona;
console.log(nombre,apellido,edad);
console.log(uno);
const copyArr=[...numeros];

const [t,y,,...arreglo]=numeros;
console.log(arreglo);


 
const [,,tr]=numeros;
console.log(tr)

//puedes pasar destructuracion a objetos anidados
const somosa={
    nombre:{
        primernombre:"carlos",
        segundonombre:"eduardo"
    }
}
const{nombre:{primernombre,segundonombre}}=somosa;
console.log(primernombre,segundonombre);