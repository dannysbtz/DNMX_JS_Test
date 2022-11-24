/* 
Mediante ciclos anidados imprimir en consola
el siguiente triangulo
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

for(var i=0;i<=10;i++){
    for(var x=10-i;x>0;x--){
        console.log('-');
    }
    for(var j=i;j>=0;j--){
        console.log('#');
    }
    console.log('\n');
}
