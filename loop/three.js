/*

const myObject = { 
'game1' : 'NFS',
'game2' : 'swpiderman'
}

for (const [key , value] of myObject) {
    console.log(key ,':-', value)
}

//object itretable nhi hote o dusare tarika hote hain

*/

const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'rubby',
    swift :'wift by google'
}

for (const key in myObject) {
   //console.log(myObject[key])
   console.log(`${key}  shoertkut is for ${myObject[key]}`)
}
