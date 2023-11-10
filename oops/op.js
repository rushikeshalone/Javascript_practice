const user = { 
username : "hitesh",
logIncount :8,
signedIn : true,

getUserDetails : function(){
    //console.log("Got user Details database");
    //console.log(`Username ${this.username}`)
}
}
//console.log(user.username)
//console.log(user.getUserDetails())

function User(username ,logIncount,isLoggedin){
    this.username =username;
    this.logIncount=logIncount;
    this.isLoggedin =isLoggedin
    return this
}

const userOne = new User("hitesh",12,true)
const userTwo = new User("Chai aur code",24,false)

console.log(userOne)
console.log(userTwo)