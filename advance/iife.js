 
 //immiediately invoked function express

//  function chai (){
//     console.log("DB Connected")
//  }

//  chai()

//   function ko immidate excecute karwane ke liye  global scope ke pollution se problem na ho isaliye 
//  global variable  ke kachare  se bachne ke liye  humne iife use kiya 
 
  (function chai (){
    console.log("DB Connected")
 })();

 ( (name) => {
    console.log(`Connected Two ${name}` )
 })("Chetan")

 



