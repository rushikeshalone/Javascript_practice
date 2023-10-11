// singleton  ** koi bhi constructor jb aap banate hain single ton ek object banta hain ye apne tarah ka ek hi object hain
// jb aap durare tarah banate hai to o singleton nhi hota
//  literal ki tarah declear karte hain to singleton nhi hota

//object literal 

//   Object.create    //  isako bola jata hai constructor ke through ..isike andar singleton banta hain
const jsUser = {
    name: "Rushikeh",
    age : 18,
    location:"Nagpur",
    email:"rushi@gmail.com",
    isLoggedIn:false,
    lastLoginDay: ["Monday","Tuesday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser[email])