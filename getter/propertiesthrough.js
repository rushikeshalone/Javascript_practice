
// properties through getter setter call karna  

// old syntax 

function User(email,password){
    this._email = email
    this._password = password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email = email
         },
        set (value){
            this._email = value
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password = password
         },
        set (value){
            this._password = value
        }
    })
}

const chai = new  User ("chai@chai.com","chai")

console.log(chai.email)