 const marvel_hero =["thor","ironman","spiderman"]
 const dc_hero = ["superman","flash","batman"]

 // marvel_hero.push(dc_hero)
//  console.log(marvel_hero);
//  console.log(marvel_hero[3][1]);

// const all_hero = marvel_hero.concat(dc_hero);
// console.log(all_hero);

// const allnewhero = [...marvel_hero,...dc_hero]
// console.log(allnewhero)

// const another_array = [11,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("Rushikesh"));
console.log(Array.from("Rushikesh"));
console.log(Array.from({name:"Rushikesh"})); //  intresting

let scrore1 = 100
let scrore2 = 200
let scrore3 = 300
let scrore4 = 400

console.log(Array.of(scrore1,scrore2,scrore3,scrore4));
