const user = {
    username:"Rushikesh",
    price:1966 ,

    welcomemessage : function(){
   console.log(`${this.username}, welcome to Website`)
    }
}

user.welcomemessage()
user.username = "JAyesh"
user.welcomemessage()