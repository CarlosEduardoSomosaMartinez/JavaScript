try{
    console.log("se agrega el codigo a evaluar");
    noExiste;
    console.log("segundo mensaje en ele try")
}catch(error){
    console.log("cualquier error surguido")
}
finally{
    console.log("al finally se ejecuta siempre")
}

//lanzar errores propios
try{
let numero="y";
if(isNaN(numero)){

    throw new Error("ESTO no es un numero");
}
console.log(numero*numero);
}catch(error){
    console.log(`se produjo el siguiente error ${error}`)
}