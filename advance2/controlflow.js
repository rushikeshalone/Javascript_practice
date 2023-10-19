const isloggedin = true;
const tempreture = 41;

/*
if (tempreture === 41){
    console.log("Less than 50")
}
console.log("Greter Than 51")

if (2 == "2"){
    console.log("Less than 50")
}
console.log("Greter Than 51")

if (2 === "2"){
    console.log("Less than 50")
}
*/

if (tempreture === 40){
   // console.log("tempreture is less than 40")
}else{
    //console.log("tempreture is greter than 50")
}

// const score = 500;
// if(score > 100){
// const power ="fly";
// console.log(`user Power ${power}`)
// }


// const score = 500;
// if(score > 100){
// const power ="fly";
// console.log(`user Power ${power}`)
// }
// console.log(`user Power ${power}`)



/*  implicit scope  */

const balance = 1000;

// if(balance > 500) console.log("test");   these is bad practice 


if (balance < 500 ){
    console.log("less than 500")
}else if(balance < 750 ){
    console.log("less than 750")
}else if (balance < 900 ){
    console.log("less than 900")
}else{
    console.log("less than 20000")
}