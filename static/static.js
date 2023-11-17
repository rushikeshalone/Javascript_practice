class user {
    constructor (username){
        this.username = username
    }
    logMe(){
        console.log(`${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const rushi = new user("Rushi")

// console.log(rushi.createId())

class Teacher extends user {
    constructor (username,email){
        super(username)
        this.email = email
    }
}

const iphone = new  Teacher ("iphone ","iphone@gmail.com")
iphone.logMe()
// console.log(iphone.createId()) /// access nhi honga error honga