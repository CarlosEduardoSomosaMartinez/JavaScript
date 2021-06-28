//le primera diferencia con los mapas es que las claves de weakmap solo pueden ser objetos
let weakmap=new WeakMap();
let obj={}
weakmap.set(obj,"ok");
//no puede haver un string como clave
weakmap.set("hola","adios");
/**Ahora si usamos un objeto como clave y no hay otra referencia  ese objto se eliminara de la memoria y del map
 * de manera automatica
 */
let jhon={name:"jhon"};
let weakmap1=new WeakMap();
weakmap1.set(jhon,"corre");
jhon=null;
console.log(weakmap1.get(jhon));

//el weak map es initerable no permite el uso de keys() entries() values()
//sus metodos son
weakmap.get(clave);
weakmap.set(clave,"valor");
weakmap.delete(clave);
weakmap.has(clave);
/**el area de aplicacion es como almacenamiento de datos adicional
 * si estamos trabajando con un objeto que pertenece a otro codigo y queremos almacenar algumnnos datos asociado a el 
 * que solo deberia existir cuando el objeto este vivo entonces weakmap es exactamente lo que se necesita
 * pnemos  los datos en un weakmap utilizando el objeto como clave y cuando el objeto sea recolecrado por el recolector de basura
 * esos datos tambien seran desaparecean automaticamente
 */
weakmap.set(jhon,"secret document");
//ejemplo de su uso
let visitCountMap = new Map();
function countUser(user){
    let count =visitCountMap.get(user)||0
    visitCountMap.set(user,count+1);
}
//como se usaria
let juan={name:"juan"};
countUser(juan);
juan=null;
//cuando queramos eliminar el objeto tambien necesitamos eleminar el mapa por lo cual seeria maejor usar un WeakMap esto 
//tambien se puede usar para el cache
/**
 * el Weakset es analogo al set pero esto acepta solo objetos
 * la unica diferencia con el set es que no permit iteraciones
 */
//un ejemplo de su uso seria 
let visitedSet=new WeakSet();
let jhon={name:"jhon"};
let pete={name:"pete"};
let mary={name:"mary"};
visitedSet.add(jhon);
visitedSet.add(jhon);
visitedSet.add(jhon);
visitedSet.add(pete);
//limpiar el objeto set
jhon=null;

