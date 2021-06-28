//los metodos keys values entries son genericos y existen un acuerdo comun para usarlos para estructura de datos
//si alguna vez podemos usar una estructura de datos propia tambien los podemos usar
//son compatibles con
/**
 * map
 * set
 * array
 */
//estos se pueden implementar en objetos pero la sintaxis es diferente
Object.keys(obj);//devuelve un array de propiedades
Object.values(obj);//devuelve un array y valores
Object.entries(obj)//devuelve un array de pares[propiedad,valor]
/**los objetos carecen de muchos metodos que exiten para los array
 * si queremos  aplicar estos metodos sera necesaria un conversion que se puede realizar de las siguientes maneras
 */
//Object.entries(obj);//nos da el array
//usamos el array
//Object.fromEntries(Array);//volvemos al objeto
//ejemplo
//queremos duplicar precios de lo siguiente
let prices={
    banana:1,
    orange:2,
    meat:4
}
let doubleprice=Object.fromEntries(Object.entries(prices).map(([keys,values])=>[keys,values*2]));
console.log(doubleprice.meat);