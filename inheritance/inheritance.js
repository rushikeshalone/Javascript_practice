class User {
constructor(username){
    this.username = username
  
}

 logMe(){
    console.log(`USERNAME IS ${this.username}`)
 }
}

class Teacher extends User{
    constructor(username,email,Password){
        super(username)
        this.email = email
        this.Password = Password
    }

    addCourse(){
        console.log(`A new course was add by ${this.username}`)
    }
}

const chai = new Teacher("chai","chai@gmail.com",1245)

chai.addCourse()

const masalaChai = new User ("masalaChai")

masalaChai.logMe()
//  console.log(chai === masalaChai)  // false

//console.log(chai === Teacher)  //false

console.log(chai instanceof Teacher)  // true
console.log(chai instanceof User)       // true


