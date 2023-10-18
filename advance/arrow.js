const user = {
    username:"Rushikesh",
    price:1966 ,

    welcomemessage : function(){
   console.log(`${this.username}, welcome to Website`)
//    console.log(this)
    }
}

// user.welcomemessage()
// user.username = "JAyesh"
// user.welcomemessage()
// console.log(this)


// function one(){
//     let username = "Alone"
//     console.log(this.username)
// }

// one()


// const chai = function (){
//     let username = "Alone"
//     console.log(this.username)
// }

// chai()

//  Arrow Function written as

const chai = () => {
    let username = "Alone"
    console.log(this.username)
}

chai()

const addtwo = (num1,num2) => {
    return num1 + num2 

}
console.log(addtwo (3,6))