// if ele switch slides*****




// // ACTIVITY 1-------------


// const name = "Jade";
// let age = 30;
// let faveColour = "Pink";
// console.log (`My name is ${name} I am ${age} and my favorite colour is ${faveColour}.`);



// stretch for activity 1 --------------


// age = 31;
// faveColour = "grey"
// console.log(`I am ${age}, my fist name is ${name} and the colour i like the most is ${faveColour}.`);




// // activity 2---------------------------------


// let breakfast = "bacon";
// let lunch = "salad";
// let tea = "lasagne";
// console.log (`${breakfast}, ${lunch} , ${tea}`);

// stretch for activity 2------------------------

// breakfast = "cereal";
// lunch = "sandwich";
// tea = "curry";
// console.log (`Tomorrow i will have ${breakfast} for breakfast, ${lunch} for lunch and ${ tea} for my tea.`);



// activity 3------------------------------------

// let date1 = new Date();
// const date2 = new Date(2021,8,27);
// let difference = date1 - date2;
// difference/=(1000*60*60*24);
// difference= Math.floor(difference);
// console.log(`It was my birthday ${difference} days ago`);

// i struggled quite a bit with activity 3.

// // activity4-----------------------------------
// const space1 = "X";
// const space2 = "x";
// const space3 = "O";
// const space4 = "O";
// const space5 = "O";
// const space6 = "X";
// const space7 = "X";
// const space8 = "O";
// const space9 = "X";

// console.log ("    |     |  ");
// console.log (` ${space1}  |  ${space2}  | ${space3} `);
// console.log ("    |     |   ");
// console.log ("----------------");
// console.log ("    |     |   ");
// console.log (  `${space4}   |  ${space5}  |  ${space6}` );
// console.log ("    |     |   ");
// console.log ("----------------");
// console.log ("    |     |   ");
// console.log ( `${space7}   |  ${space8}  |  ${space9} `);
// console.log ("    |     |   ");

// // output below--------------------------------
//     |     |  
//  X  |  x  | O 
//     |     |   
// ----------------
//     |     |   
// O   |  O  |  X
//     |     |   
// ----------------
//     |     |   
// X   |  O  |  X 
//     |     |   

// pm activities---------------------------------

// activity1-------------------------------------

// let age = 5;
// let country = "England";
// if (age >= 18 && country == "England") {
//     console.log ("Yes i can serve you!")
// }
// else if (age <=17 &&country == "England") {
//     console.log ("You aren't old enough!!")
// } else {
//     console.log("sorry i didn't understand?")
// }


// activity2 --------------------------------------

// let pizzaTop = "cheese";
// switch(pizzaTop){
//     case "ham":
//     case "chicken":
//         console.log ("This topping should not be on my pizza");
//         break;
//     case "cheese":
//     case "chillies":
//         console.log ("These ar very important toppings for my pizza!");
//         break;
//     default:
//         console.log ("Sorry we dont have the ingredients to make your pizza")
// }


// // activity 3-------------------------------------

// let password = "password1";
//  if (password.length>+[8]) { 
//     console.log(`${password} accepted!`);
// }
//     else {
//     console.log ("password too short try again!")
// }


// // activity4---------------------------------------

// let num = 6
//  if (num % 3 == 0 || num % 5 == 0){
//     console.log("This number is divisible by 3 or 5 ")
// } 
//  else {
//     console.log("the number is not divisible by 3 or 5.")
// }

//  activity 5---------------------------------------

// let num = 15
// if (num %3 ==0 && num % 5 == 0){
//     console.log("FizzBuzz")
// }
// else if (num % 3 == 0) {
//     console.log("Fizz")
// }
// else if (num % 5 ==0) {
//     console.log("Buzz")
// }
// else {
//     console.log (num)
// }

// activity6-----------------------------------------


// let num = 7261;
// let numString = num.toString(); 
// let reverseNumString = numString.split('').reverse().join('');

// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }

// this is tutor answer^ as i was totally stumped on this one and had no idea where to even start. 

//  will be researching more built in methods.


// activity7-----------------------------------------


// let time = 7
// let placeOfWork = "code nation"
// let townOfHome = "bolton"

// if (time == 7){
//     console.log (`im at home in ${townOfHome}`)
// }
// else if ( time == 8){
//     console.log("im commuting")
// }
// else if (time == 9){
//     console.log(`im at work at ${placeOfWork}`)
// }
// else {
//     console.log ("im having some me time.")
// }

// activity8---------------------------------------

// // this counts how many vowels
// function countVowel(str){
//     const count =str.match(/[aeiou]/gi).length;
//     return count;
// }
// const str = ("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi")
// const result= countVowel(str);
// console.log(result)



// function endVowel(x){
//     const match = x.match(/[aeiouAEIOU](?!.*[aeiou])/i);
//     return match ? match[0]: "no match"
// }
// console.log(endVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"))
// // finds last vowel's index.


// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
//  console.log(string.lastIndexOf(vowelArr[i]));
// // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // compares current index to find highest index
// if (index >= highestIndex ){
// // so new highestindex becomes index
//     highestIndex = index;
// // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }
// // This like logs the last Vowel to the console. 
// console.log(lastVowel); 
// // This line logs the index number of the last vowel. 
// console.log(highestIndex)
// // tutor answer^ to refer to and learn as i couldn't get this one 

// activity9--------------------------------------
// let word = "hello";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }
// // tutor answer^ for reflection as i didn't get to this activity 


// //activity 10------------------------------------
// let num1 = 7;
// let num2 = 7;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//   console.log(`The sum = ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }
// // tutor answer^ as i didn't get to this one, was stuck on activity 8 for too long.