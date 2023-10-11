// singleton  ** koi bhi constructor jb aap banate hain single ton ek object banta hain ye apne tarah ka ek hi object hain
// jb aap durare tarah banate hai to o singleton nhi hota
//  literal ki tarah declear karte hain to singleton nhi hota

//object literal 

//   Object.create    //  isako bola jata hai constructor ke through ..isike andar singleton banta hain

const mysym = Symbol();

const jsUser = {
    name: "Rushikeh",
    "full Name" : "Rushikesh Alone",
    [mysym] : "MyKey",
    age : 18,
    location:"Nagpur",
    email:"rushi@gmail.com",
    isLoggedIn:false,
    lastLoginDay: ["Monday","Tuesday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["full Name"])
// console.log(jsUser[mysym])

// Interview Questions 
//  1) ek symbol lena hai usako define karna hai usako key ki tarah act karna hai or print karana hai

//  object ki values change karni hai to to direct = to se kr sakte hain

jsUser.email = "user@gmail.com"

//object ko agar freeze karna ho to agar values koi change na kare to 

//Object.freeze(jsUser);

// console.log(jsUser)

jsUser.greetting = function(){
    console.log("Hellow User Rushi")
}

console.log(jsUser.greetting());
console.log(jsUser.greetting);

jsUser.greettingTwo = function(){
    console.log(`Hellow User Rushi ${this.age}`)
}

console.log(jsUser.greettingTwo());
console.log(jsUser.greettingTwo);