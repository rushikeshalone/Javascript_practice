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
 
// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj3)
// console.log(obj4)

const obj3 = {...obj1,...obj2}
//console.log(obj3)

const users =[
    {
        id:34,
        Username:"Rushi"
},
{
    id:35,
    Username:"Saurabh"
},
{
    id:36,
    Username:"Jayesh"
},
]

users[0].id
//console.log(users[0].id)
//console.log(users[0].Username)

//console.log(tinderUser)

//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('name'))

