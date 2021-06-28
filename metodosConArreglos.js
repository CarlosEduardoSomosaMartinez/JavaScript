//para eliminar e incluso insertar a la mitad podemos usa el metodo splice y este devuelve un array reducido
//ejemplo 1
let arr=[1,2,3,4,5];
arr.splice(2,1);
console.log(arr);
//ejemplo 2
let arr3=[1,2,3,4,5];
let arr2=arr3.splice(2,1);
console.log(arr2);
//ejemplo de inserccion
let nom=["armando","brandon","daniela"];
nom.splice(2,0,"carlos");
console.log(nom);

//copia del array
let arreglo=["t","e","s","t"];
let seguro=arreglo.slice(1,3);
console.log(seguro);
arreglo=arreglo.map(item=>item+="z");
console.log(arreglo)

