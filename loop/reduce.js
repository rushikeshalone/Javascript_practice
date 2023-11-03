const mynums =[1,2,3]

// const myTototal = mynums.reduce( function (acc,currval){
//     console.log(`acc : ${acc} and currval :${currval}`);
//     return acc + currval
// },0)

// const myTototal = mynums.reduce((acc,currval)=> acc+currval ,0)
// console.log(myTototal);

const shoppingcart =[
    {
        itemName :"js course",
        price : 1
    },
    {
        itemName :"python course",
        price : 1
    },
    {
        itemName :"mobile course",
        price : 1
    },
    {
        itemName :"data course",
        price : 1
    }
]

const pricetopay = shoppingcart.reduce((acc,item)=>acc + item.price,0)

console.log(pricetopay);