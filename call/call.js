
function setUsername (username){
 // complex DB Call
this.username = username
}

function createUser(username , email , password){

    setUsername(username)

    

    this.email = email
    this.password = password

}

const chai = new  createUser("chai","chai@gmail.com","123")
