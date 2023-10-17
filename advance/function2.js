function calculatecartprice(...num1){
    
    return num1

}

// note :-  ... three dot are spread operator or rest operator its use depend 

//  rest operator :- jo bhi bikhare hue hai usako sametke ek bundle karke do
//   spread operator :- 

//  console.log(calculatecartprice(200,400,500));


function calculatecartprice2(val1,val2,...num1){
    
    return num1

}
// console.log(calculatecartprice2(200,400,500,20000))

//note :-  val1 and val2 are  200 or 400  values assign hue hai 

const user = {
    username:"Rushikesh",
    Price: 199
}

function handleObject (anyObject){
console.log(`username is ${anyObject.username}  and price is ${anyObject.Price} `)
}

// handleObject(user)
handleObject({
    username:"Tekade",
    Price:2585
})

const mynewarray =[12,21,21,2,2654,454,656,4646]

function retunnewvalues (getarray){
    return getarray[7]
}

// console.log(retunnewvalues(mynewarray))
console.log(retunnewvalues([12,21,21,2,2654,454,656,4646]))