
// Completar el codigo de la promesa de manera que se ejecute a los 10 segundos
// la cual de como salida el console log agregado al final
let promise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("This is my promise");
   }, 10000);
});
// output
promise.then((result)=>{console.log(result)})
