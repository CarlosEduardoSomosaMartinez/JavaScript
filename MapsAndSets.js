/**map es una coleecion de datos identificado por claves al igual que un objeto .Pero 
 * la principal diferencia es que map permite claves de cualquier tipo
 * */
//para crear un mapa
new Map();
//para almacenar el valor yla clave
Map.set(clave,valor)
//devuelve el valor de la clase si esta no exite el valor que devolvera sera undefined
map.get(clave)
//devuelve true si la clave existe y false si no existe
map.has(clave)
//elimina los valores de la cla 
map.delete(clave)
//limpiar mapa
map.clear();
//devuelve el numero actual de elementos
map.size;

let mapa=new Map();
map.set('1','str1');//un string como clave 
map.set(1,'num2')//un entero como clave
map.set(true,"true")//un boolean como clave
console.log(map.get(1));
console.log(map.get("1"));

//tambien podemos usar objetos como  claves
let jhon ={name:"jhon"};
//guarda la veces que han visitodo el mapa
let visitCountMap=new Map();
visitCountMap.set(jhon,123);
console.log(visitCountMap.get(jhon));

//comparacion se usa === yse pueden encadenar las llamadas
map.set('1','str1').set(1,"num1").set(true,'bol1');
//para recorrer un mapa hay 3 metodos
map.keys()//devuelve un iterable para las claves
map.values()//devuelve un iterable para los valores;
map.entries()//devuelve un iterable para las entradas[clave valor] se usa por defecto en for..of
//ejemplo
let recipeMap= new Map([
    ['pepino',500],
    ['tomate',350],
    ['cebolla',50]
]);
for(let vegetables of recipeMap.keys()){
    console.log(vegetables)//solo tendremos las claves
}
for(let amount of recipeMap.values()){
    console.log(amount);//solo tendremos lo valores


}
for(let  entry  of recipeMap){
    console.log(entry)//tendremos los dos tanto clave como valoress
}
//o tambien se pueden usar el for ...each
recipeMap.forEach((values,key,map)=>{
    console.log(`${values} ${key}`)
})
//si nosotros tenemos un objeto plano y queremos crear un map apartir de el podemos usar un metodo llama
//Object.entries() y este me devolvera un arreglo  de pares valor/clave en ese formato
//ejemplo
let obj={
name:"carlos",
age:19
}
let mapita=new Map( Object.entries(obj));
console.log(map.get('name'));
//tambien dado  un par ordenado se puede transformar en un objeto
let price=Object.fromEntries([
    ["banana",1],
    ["orange",4],
    ["meat",4]
]);
//price haora es un objeto de un arreglo de pares ordenados
price.banana();
//podemos crear un objeto plano  apartir de un map
let map1=new Map();
map1.set("banana",1);
map1.set("orange",2);
map1.set("meat",4);
let obj = Object.fromEntries(map1.entries());
//set es una coleccion de tipo especial "conjunto de valores "(sin claves ),donde cada valor puede aparecerr solo una vez
//sus metodos son:
new Set(iterable)//crea el set.El argumento opcional es un objeto iterable (generalmente un array) con valores para inicializrlo
set.add(valor)//agregar un valor,devuelve el set en si
set.delete(valor)//elimina el valor ,devuelve true si el valor existe al momento de la llama si no devuelve false.
set.has(valor)//devuelve true si el valor existe en el set si no devuleve false
set.clear()//elimina todo el set
set.size()//el tamaño de el elemento

//el set  no se puede repetir valor es bueno para no repetir datos 
let set =new Set();
let jhon={name:"jhon"},pete={name:"Pete"},mary={name:"Mary"};
//agregar los elementos
set.add(jhon);
set.add(jhon);
set.add(pete);
set.add(mary);
set.add(mary);
//iteracion sobre set
let set =new Set(["orange","apples","banannas"])
for(let valor of set)console.los(valor);
//se puede hacer en un foreach
set.forEach((values,valueAgain,set)=>{
    console.log(values);
})

let set=new Set(arr);
let arreglo=[...set];
return arreglo;