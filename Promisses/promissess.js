//fetch('https://something.com').then().catch().finally()

const promiseOne = new Promise(function(resolve , reject){
// Do an async task
//DB calls  cryptography  , network

setTimeout(function(){
    console.log("async task is completed");
    resolve()
},1000)
})

promiseOne.then(function(){
    console.log("promissess consumed")
})

// othe method to write promissess

new Promise (function(resolve , reject){
setTimeout(function(){
    console.log("async task 2")
    resolve()
},1000)
}).then(function(){
    console.log("async 2 resolved")
})


// promissess 3 

const promiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
resolve({username:"chai",Eamail:"chai@example.com"});
},1000);
})

promiseThree.then(function(user){
console.log(user)
})

// promise 4 

const promiseFour = new Promise(function(resolve,reject){
setTimeout(function(){
    let error = false;
    if (!error){
        resolve({username:"rushi",Password:"rushi@gmail.com"})
    }else{
        reject('Error: something Went wrong')
    }
},2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
console.log(username)
}).catch(function(error){
console.log(error)
}).finally(()=>{
    console.log("The Promise is either resolved or reject")
});

// promisses five  

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
    if (!error){
        resolve({username:"Javascript",Password:"123@gmail.com"})
    }else{
        reject('Error: js Went wrong')
    }
    },1000)
})

async function consumePromiseFive (){
   try {
    const response =  await promiseFive
     console.log(response);
   } catch (error) {
    console.log(error)
   }
}

consumePromiseFive()
/*
async function getAllUser (){
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data);
} catch (error) {
    console.log("ERROR:",error)
}
}

getAllUser ()
*/

/*
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

*/
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))