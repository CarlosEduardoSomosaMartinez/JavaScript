//una funcion es un bloque de codigo independiente al scope al mabito global que se define una vez y se usa n veces
//estan reciben o no parametros y pueden o no  devolver valores

/**
 * las funciones son concideradas objetos
 * se pueden asignar como valor se puede retorna la ejecucion de una funcion se puede pasar como argumentos y retornar como
 * valores tambien tienen las funciones flechas
 */
//forma de declarar una funcion hay dos maneras
//funciones declaradas y expresadas

//funcion Declarada
function estoEsUnaFuncion() {
  console.log("uno");
  console.log("dos");
  console.log("tres");
}

//invocacion de funcion los parentesis indica ejecucion
estoEsUnaFuncion();

function queDevuelveValor() {
  //cuando se devulve valor deve usar la palabra reservada
  console.log("uno");
  return "esto devuelve esto";
}
let variableFuncion = queDevuelveValor();

console.log(variableFuncion);

//aceptar parametros de una funcion puede aceptar parametros le puedes asiganar un valor por defecto a los parametros
function saludar(nombre = "desconocido", edad = 0) {
  console.log(`hola ${nombre} y tiens ${edad}años`);
}
saludar("kenai", 7);
saludar();
//Funciones Declaradas vs funciones expresadas
funcionDeclarada();
function funcionDeclarada() {
  console.log(
    "esto es una funcion declara incluso antes de que la funcion sea declarda "
  );
}

funcionDeclarada();
//funcion expresada o funcion anonima
console.log(funcionExpresada);
const funcionExpresada = function () {
  console.log(
    "esto es una funcion expresada es decir una funcion que se le asignado a una variable si invocamos una funcion java escript antes de su funcion esto pasara"
  );
};
