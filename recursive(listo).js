/* Funcion recursiva que me permita crear en consola la siguiente figura 
----------#
---------##
--------###
-------####
------#####
-----######
----#######
---########
--#########
-##########
########### 
*/

const recursive = (num) =>{
    if(num<0){
        return 
    }
    for(var i=0;i<num;i++){
        console.log('-')
    }
    for(var j=0;j<=10-num;j++){
        console.log('#')
    }
    console.log('\n');
    recursive(num-1)
}

recursive(10);

