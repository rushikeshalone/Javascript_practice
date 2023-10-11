const tinderUser = new Object(); // these is singleton object
const tinderUser2 = {}        // these is not singleton object


tinderUser.id ="123abc"
tinderUser.name ="sam"
tinderUser.age = 16
tinderUser.isloggedIn = false

//console.log(tinderUser)
//console.log(tinderUser2)

const regularUser = { 
    email : "user@gmail.com",
    fullname : {
        username:{
            firstName: "Rushi",
            lastname : "Alone"
        },
        
       user :{
        name: "saurabh",
        new : "tekade"

       } 
        
    }


}
// console.log(regularUser)
// console.log(regularUser.fullname.username.firstName)
// console.log(regularUser.fullname.user.name)

const obj1 ={1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d",5:"e"}

//const obj3 = {obj1 , obj2}            // these is wrong 
 
const obj3 = Object.assign(obj1,obj2)
console.log(obj3)


