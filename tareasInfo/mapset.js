function unique(arr){
    let set=new Set(arr);
    let arreglo=[...set];
    return arreglo;
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values));

function aclean(arr){
    let map =new Map();
    for(let word of arr){
        let ordenarlas=word.toLowerCase().split("").sort().join("");
        map.set(ordenarlas,word);
    }

    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); 

let map =new Map();
map.set("name","John");
let keys=Array.from(map.keys());
keys.push("more");