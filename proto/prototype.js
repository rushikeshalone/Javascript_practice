/*
let myName = "rushi";
console.log(myName.length);
*/

/*
let myName = "rushi     ";
console.log(myName.truelength);
*/


let myHero = ["thor","spiderman"];

let heroPower = {
    thor : "hammer",
    spiderman:"sling",
    getSpiderPower: function(){
        console.log(`spidy Power is ${this.spiderman}`)
    }
}

Object.prototype.Rushi =function(){
    console.log(`rushi is present in all object`);
}

Array.prototype.heyRushi = function(){
    console.log(`hey Rushi Hellow`)
}

// heroPower.Rushi()
// myHero.Rushi()
// myHero.heyRushi()
// heroPower.heyRushi() these is an error  the values  not assigned


// inheritance

const User ={
    ussername:"chai",
    email: 'chai@gmail.com'
}
const Teacher = {
    makeVideo :true
}
const teachingSupport ={
    isAvailable : false
}
const TASupport = {
    makeAssigment : 'JS Assigmrnt',
    fullTime: true,
    __proto__ :teachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(teachingSupport ,Teacher)

let anotherUsername =  "chaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`true length is : ${this.trim().length}`)
}

anotherUsername.trueLength();
"hitesh".trueLength();
"iceTea".trueLength();




   