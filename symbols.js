/**las keys de un objeto solo pueden ser  de dos tipos de string o de symbols estos ultimos
 * representan un valor unico un valor de este tipo puede ser creado de la 
 * siguiente manera
 */
let id=Symbol();
//este tambien puede llevar una descripcion que es conocida como symbol name
let id2=Symbol("name");
//se garantiza que los names sean unicos aunque declaremos muchos con la misma descripcion esto tendria valores distintos
//ya que la descripcion es solo una etiqueta
let id3=Symbol("name");
if(id2!==id3){
    console.log("SON DIFERENTES");
}
//LOS SYMBOLS NO SE PUEDEN AUTOCONVERTIR EN STRINGS si queremos mostrarlo los tendriamos que pasar por un toString
alert(id2.toString());
//o obtener solo su descripcion solamente
alert(id2.description);
//estos los podemos usar como identificadores en nuestros objetos
let user={
    name:"jhon"
}
let id =Symbol("id");
user[id]=1;
alert(user[id]);
//si lo queremos usar de manera directa en objeto literal tenemos que usar []
let id=Symbol("id");
let user={
    name:"carlos",
    [id]:234
}//estos son omitidos en el for in

//para crear un valor de symbol global y siempre tenga el mismo valor se hace los siguiente
let id5=Symbol.for("id");
//saber que varible guarda que symbol y solo funciona con los symbol globales
Symbol.keyFor(id5);


