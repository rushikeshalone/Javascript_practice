const useremail = "arushi@gmasil.com"

// if (useremail){
//     console.log("Got User Email");
// }else{
//     console.log("Dont have user email");
// }


/*
** falsy values **

 false , 0 , -0 , BigInt 0n , "" , null , Undefined , NaN 

 ** truthy values **

 other values are truthy values

 "0"  ===> truthy values
 'False' ===> truthy values
 " " ===> truthy values
 [] , { } , function(){}

*/

/*
const email2 = []
if(email2.length === 0){
    console.log("Array is empty")
}

*/

/*
const emptyobject = {}

if (Object.keys(emptyobject).length === 0 ){
 console.log("Object is Empty")
}

Expression                       output

false == 0                          true
false == ''                         true
0 == ''                             true

*/

//  Nullish coalescing Operator (?? ) : null  , Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1)

// Terniary Operator

// condition ? true : false 

const iceTraprice = 100

iceTraprice >= 80 ? console.log("less than 80") : console.log("more than 80");