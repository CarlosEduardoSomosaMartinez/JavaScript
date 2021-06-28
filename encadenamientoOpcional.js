//en caso de no saber si una de  las propiedade existe se puede usar el ? para conseguir un undefined
function Datos(nombre,direccion){
        this.nombre=nombre;
        this.direccion=direccion
}
const persona1=new Datos("carlos",{barrio:"reserva",calle:"manzana"});
const persona2=new Datos("carlos",{calle:"manzana"});
console.log(persona1.direccion.barrio);
console.log(persona2.direccion?.barrio);

//se puede usar en  otro casos como()[]
let userAdmin={
    admin(){
        console.log("eres admi")
    }
}

let noAdmin={
    
}
userAdmin.admin?.();
noAdmin.admin?.();
//[]
let llave="primerNombre";
let user1={
    primerNombre:"juan"
}
let user2=null;
console.log(user1?.[llave]);
console.log(user2?.[llave]);

//lo podemo  usar para delete
delete user?.name;