//primer método para arreglos 
varios.forEach(elemento=>{
 console. log(elemento);
 })

  //. reduce()
    let numeros = [100,300,2,5,10]; 
    
    let resultado = numeros.reduce((accumulador,valorActual)=>{
        return acumulador+valorActual;
    });
  console. log(resultado);

   //. filter()
    let filtrado = numeros.filter( numero =>{
         return numero>10;
    });

   console. log(filtrado); 
     let paises = ["Colombia", "USA", "Brasil", "Mexico"]; 
     
     let filtered = paises.filter (pais =>{
         return pais.startswith("с"); 
    }); 
     
   console.log(filtered); 
   //.map ( )
   const saludarPais = paises-map(country =>{ 
     return "Bienvenidos pasajeros de "+ country; 
    })