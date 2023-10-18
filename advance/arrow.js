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

// const chai = () => {
//     let username = "Alone"
//     console.log(this.username)
// }

// chai()

// Basic arrow function return


// const addtwo = (num1,num2) => {
//     return num1 + num2 

// }
// console.log(addtwo (3,6))

//implicit retun arrow function


// const addtwo = (num1,num2) =>  num1 + num2 
// const addtwo = (num1,num2) => ( num1 + num2  )
// const addtwo = (num1,num2) => ({username :"NEwsaf"})
const addtwo = (num1,num2) => ([2,3,4,5,6,7,7])
    
    console.log(addtwo (3,6))
