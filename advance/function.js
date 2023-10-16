

function myname(){
    console.log("R")
    console.log("U")
    console.log("S")
    console.log("H")
    console.log("I")
}

// myname()

// function addtwonumber(number1,number2){

//     console.log(number1 + number2)

// }

// addtwonumber(3,4)
// addtwonumber(3,"4")
// addtwonumber(3,null)

function addtwonumber(number1,number2){     // number1 and number2 are called as parameter of function

    // let result = number1 + number2       
    // return result

    return number1 + number2
}

const result = addtwonumber(4,6)           //        4 or 6 are called as argument of function

// console.log("Result:-" ,result)



//first retun function 


function loginUserMassage(username){
    return `${username} just Loged In`

}

const resultlogin = loginUserMassage("akshay") 
const resultlogin2 = loginUserMassage() 
// akshay name ki jagah agar  kuch pass nhi hua empty string pass hue to 
// values undefined aayegi

// console.log(resultlogin)
// console.log(resultlogin2)

// Secound   return function 

function loginUserMassage2(username){
    if (username === undefined){
        console.log(`Please Insert Some Values`);
        return
    }
    return `${username} just Loged In`

}

// console.log(loginUserMassage2())

// third retun function

function loginUserMassage3(username){
    if (!username){
        console.log(`Please Insert Some Values`);
        return
    }
    return `${username} just Loged In`

}

// console.log(loginUserMassage3())

// fourth function written  
// default values pass

function loginUserMassage4(username = "Sam"){
    if (!username){
        console.log(`Please Insert Some Values`);
        return
    }
    return `${username} just Loged In`

}
console.log(loginUserMassage4())
console.log(loginUserMassage4("Rushikesh"))