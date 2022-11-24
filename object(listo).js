let usuarios = [
    {
        nombre: 'Jose',
        edad : 22,
        estatura: 1.95
    },
    {
        nombre: 'Alberto',
        edad : 28,
        estatura: 1.80
    },
    {
        nombre: 'Juan',
        edad : 21,
        estatura: 1.50
    },
    {
        nombre: 'Jesus',
        edad : 19,
        estatura: 1.65
    }
];
// Realizar una funcion, o utilizar una funcion nativa de JS la cual me permita imprimir el nombre del usuario con la edad mayor
// Realizar una funcion, o utilizar una funcion nativa de JS la cual me permita imprimir el nombre del usuario con la edad menor
// Realizar una funcion, o utilizar una funcion nativa de JS la cual me permita imprimir el nombre del usuario con la estatura mayor
// Realizar una funcion, o utilizar una funcion nativa de JS la cual me permita imprimir el nombre del usuario con la estatura menor
let userMayor;
let userMenor;
let userMayorEstatura;
let userMenorEstatura;
usuarios.forEach((user,index)=>{
    if(index==0){
        userMayor=user;
    }else if(userMayor.edad<user.edad){
        userMayor=user;
    }
})

usuarios.forEach((user,index)=>{
    if(index==0){
        userMayorEstatura=user;
    }else if(userMayorEstatura.estatura<user.estatura){
        userMayorEstatura=user;
    }
})

usuarios.forEach((user,index)=>{
     if(index==0){
         userMenor=user;
        }else if(userMenor.edad>user.edad){
         userMenor=user;
     }
 })

 usuarios.forEach((user,index)=>{
    if(index==0){
        userMenorEstatura=user;
       }else if(userMenorEstatura.estatura>user.estatura){
        userMenorEstatura=user;
    }
})
console.log(userMayor)
console.log(userMenor)
console.log(userMayorEstatura)
console.log(userMenorEstatura)