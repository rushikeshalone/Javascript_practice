function createUser(username,score){
    this.username = username
    this.score = score    
}

createUser.prototype.increment = function(){
          this.score++
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
const chai = new createUser("chai",25)
const  tea = new createUser("tea",250)

// myArrary.prototype.map()   // ye behind the scene

chai.printMe()
tea.printMe()