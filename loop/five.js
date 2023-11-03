const coading = ["js","ruby","vb.net","python" ,"Rushi"]
/*
for (const key in coading) {
    console.log(coading [key])

}

*/
/*
coading.forEach( function (val){
console.log(val)

})

*/

/*
coading.forEach((item)=>{
    //console.log(item)
})


function printme(item){
   // console.log(item)
}

coading.forEach(printme)

*/

coading.forEach((item , index,arr)=>{
    //console.log(item,index,arr)
})


const myCoading =[
    {
        languages : " Javascript",
        languagesFileName:"js"
    },
    {
        languages : " java",
        languagesFileName:"javas"
    },
    {
        languages : " python",
        languagesFileName:"py"
    }
]


myCoading.forEach((item)=>{
    console.log(item.languages)
})