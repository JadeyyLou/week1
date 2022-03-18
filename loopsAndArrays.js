// array syntax
let coffeeOrder = [
    "Alex - coratdo",
    "ben - cortado",
    "charlie - whatevers new"
];
   console.log(coffeeOrder);
   console.log(coffeeOrder[2]);
// lists need to be in []
coffeeOrder[1] = "jade - Latte"
   console.log(coffeeOrder);
   console.log(coffeeOrder.length);
// shows about of items not characters

// properties work like variables
coffeeOrder.push("james- hot chocolate");
   console.log(coffeeOrder);
// .push adds on end , and .pop removes last.
coffeeOrder.pop()
   console.log(coffeeOrder);
//    other methods are.... .map .shift .unshift .splice .unsplice

// activity 1

let favGames = [
    "heavy-rain",
    "call of duty modern warfare",
    "fable"
] 
console.log(favGames);
favGames.push("fahrenheit");
favGames.push("vanguard");
favGames.pop();
console.log(favGames);


// // .map
// const array = [
//     1,2,3,4,5
// ];
// const map = array.map(x => * 2);
// console.log(map);   dosen't work


// loops--------------------------------------------------- 

let faveDrink = [
    "water",
    "coffee",
    "pepsi"
]
for(let i = 0; i < faveDrink.length; i++)
console.log(faveDrink[i]);
// i stands for index
// is 0 less than the length of the list. i++ means move on to the next one. once the index is bigger than the length of list it will stop.

// this is good as its easy to add to list
// i is the variable name

let multiplesTwo = [];
 for(let i = 0; i <20; i++){
     if (i % 2 ==0){
         multiplesTwo.push(i)
     }
 }
 console.log(`numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}`);
//  if i change 0 to 1 (i=0) will give odd nums. or !=

// while loops------------------------------------

let age = 15 

while(age < 18){
    console.log("you are a child");
    age++
}
console.log ("you're an adult")
// this will update age until its 18 

let cards = [
    "diamond", "club","spade","hearts"
]
let currentCard = "club";
 while(currentCard != "spade"){
     console.log(currentCard);
     currentCard = cards[Math.floor(Math.random()*4)];
 }
//  line 86 re assigns a random card from the list. it will keep going until card i spade.

// activity1----------------------------------------------------

