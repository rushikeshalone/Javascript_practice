//fetch('https://something.com').then().catch().finally()

// const promiseOne = new Promise(function(resolve , reject){
// // Do an async task
// //DB calls  cryptography  , network

// setTimeout(function(){
//     console.log("async task is completed");
//     resolve()
// },1000)
// })

// promiseOne.then(function(){
//     console.log("promissess consumed")
// })

// othe method to write promissess

// new Promise (function(resolve , reject){
// setTimeout(function(){
//     console.log("async task 2")
//     resolve()
// },1000)
// }).then(function(){
//     console.log("async 2 resolved")
// })


// // promissess 3 

// const promiseThree = new Promise(function(resolve,reject){
// setTimeout(function(){
// resolve({username:"chai",Eamail:"chai@example.com"});
// },1000);
// })

// promiseThree.then(function(user){
// console.log(user)
// })

// // promise 4 

// const promiseFour = new Promise(function(resolve,reject){
// setTimeout(function(){
//     let error = false;
//     if (!error){
//         resolve({username:"rushi",Password:"rushi@gmail.com"})
//     }else{
//         reject('Error: something Went wrong')
//     }
// },2000)
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
// }).then((username)=>{
// console.log(username)
// }).catch(function(error){
// console.log(error)
// }).finally(()=>{
//     console.log("The Promise is either resolved or reject")
// });

// // promisses five  

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true;
//     if (!error){
//         resolve({username:"Javascript",Password:"123@gmail.com"})
//     }else{
//         reject('Error: js Went wrong')
//     }
//     },1000)
// })

// async function consumePromiseFive (){
//    try {
//     const response =  await promiseFive
//      console.log(response);
//    } catch (error) {
//     console.log(error)
//    }
// }

// consumePromiseFive()
// /*
// async function getAllUser (){
// try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
// } catch (error) {
//     console.log("ERROR:",error)
// }
// }

// getAllUser ()
// */

// /*
// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response)=>{
// return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error))

// */
// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response)=>{
// return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=> console.log(error))

/*

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Rushi promise Consumed")
    }, 1000);
    resolve();
    reject();
}).then(()=>{
    console.log(" Rushi promise resoled")
})
.catch(()=>{
    console.log("Promise Rejected")
})
*/

/*

new Promise ((resolve,reject)=>{
    setTimeout(() => {
        console.log("Rushi Arrows consumed")
        resolve();
    }, 2000);
}).then(()=>{
    console.log("Rushi completed")
})

const promiseThree = new Promise ((resolve,reject)=>{
    setTimeout(() => {
        resolve({username:"Rushikesh",email:"chai@example.com"});
    }, 1000);
})

promiseThree.then((user)=>{
    console.log(user)
})

*/

/*
const promiseFour = new Promise((resolved,reject )=>{
    setTimeout(() => {
        let error =  false
        if(!error){
            resolved({username:"Rushikesh",password:"123"})
        } else{
            reject("Error:Something Went Wrong")
        }
    }, 1000);
})
.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{
    console.log(error);
})

*/

/*
const promiseFive = new Promise ((resolved,reject)=>{
    setTimeout(()=>{
      let error = false
      if(!error){
        resolved({username:"Rushikesh JAvascript",password:"123"});
      }else{
        reject("ERROR : javascript Error ")
      }
    },2000)
})

async function consumePromiseFive (){
try{
    const response = await promiseFive
    console.log(response);
}catch(error){
    console.log(error)
}
}

consumePromiseFive()

*/

const promiseSix = new Promise ((resolve,reject)=>{
  setTimeout(() => {
    let error = false;
    if(!error){
        resolve([1,2,3,4,5,6])
    }else{
        reject("ERROR:new Eroor")
    }
  }, 10000);
});

async function consumepromissesnew (){
    try {
        const response = await  promiseSix;
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumepromissesnew();
   
async  function getAlluser(){

   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
   } catch (error) {
    console.log("ERROR")
   }

}

getAlluser()