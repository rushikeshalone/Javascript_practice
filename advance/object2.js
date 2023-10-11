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
console.log(regularUser)
console.log(regularUser.fullname.username.firstName)
console.log(regularUser.fullname.user.name)

