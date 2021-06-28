let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function sumSalaries(salaries){
     let resultado=Object.entries(salaries);
    let suma=0;
     for(let values of resultado){
        suma+=values[1];
    }
    //maneta alternativa
    Object.values(salaries).reduce((a,b)=>a+b,0);
    return  suma;
    

  }

  console.log( sumSalaries(salaries) ); 
  
  let user = {
    name: 'John',
    age: 30
  };
  function count(obj){
      return Object.keys(obj).length
  }

  console.log( count(user) ); // 2