function one(){

    const username = "Rushikesh"
      function two(){
        const website = "www.youtube.com"
       // console.log(username);
        //console.log(website);
      }

     // console.log(website);
      two()
}
one()

if(true){
const username = "Rushi"
if(username === "Rushi"){
    const website = "www.youtubwe.com"
    //console.log(username + website);
}

//console.log(website);

}
// console.log(username);


// +++++++++++++++++++ Intresting +++++++++++++++++++//

console.log(addone(5))  // yaha access honga return karega

function addone(num){
    return num + 1
}
addone(5)


// addTwo(5)               // Access nhi honga Error show karega Hoisting Issue

const addTwo = function(num1){
    return num1 +2                   
}

addTwo(5)