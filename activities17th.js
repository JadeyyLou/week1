// functions slides

// convert this for activity1
// function factorial (n){
//     if ((n=== 0)|| (n===1)) {
//         return 1;
// }
//     else{
//         return (n* factorial(n-1));
// }
// }
// console.log(factorial(33));

// activity1--------------------------

// const factorial = (n) => {
//     if ((n === 0)|| (n === 1)){
//     return 1;
// }
//   else  {
//     return (n* factorial(n-1));
// }
// }
// console.log(factorial(33)) 
// // a factorial is a number times by every number before it

// activity2--------------------------

// let orderCount = 0;
// const takeOrder = (topping, topping2, side,drink) => {
//     console.log(`pizza with ${topping} and ${topping2}. Please could i have ${side} for a side and ${drink} to drink.`);
//     orderCount++;
// }
// takeOrder("cheese","chillies", "chips", "pepsi");
// takeOrder("cheese","peperoni", "salad", "coke");
// takeOrder("chicken","sweetcorn", "salad", "water");
// console.log(orderCount);

// activity3-------------------------------


// const pinNum = 1234;
// let accBalance = 500;

// const cashWithdraw = (enterPin , amount) => {
//     if((enterPin == pinNum) && (amount <= accBalance)){
//      accBalance-amount;
//         console.log(`withdrawing ${amount} from your account`)
//     }else if (enterPin== pinNum){
//         console.log("insufficient funds available")
//     }else{
//         console.log("incorrect PIN")
    
//     }}
 
// cashWithdraw(1234,500);
// cashWithdraw(1111,200);
// cashWithdraw(1234,987);
// cashWithdraw(1234,20);
// console.log(accBalance)

// -----------objects slides-------------
// pm activity1--------------------------


// const person = {
//     name: "Jade",
//     age: 30,
//     faveSong:[ "Calvin Harris & Example , we'll be coming back", "Calvin Harris, feel so close."],
//     sayHi(){
//         return (`Hello my name is ${this.name}`)
//     }}
// console.log(person.sayHi())

// activity2------------------------------------

// const pet = {
//     name:"steve",
//     typeOfPet:"fish",
//     age:"6 month",
//     colour:"pink",
//     eat(){ 
//         return(`your pet ${this.name} is eating flakes`)
// },
//     drink(){
//         return(`your pet ${this.name} doesn't drink.`)
// }}
//     console.log(pet.eat(),pet.drink())


// activity3-------------------------------
    let price = 0
    let order = []

const coffeeShop = {
    branch: "costa",
    drinks: 
    {cappuccino: 2.00,
    latte: 1.50,
    hotChocolate: 2.00,
    frappe: 3.00
    },
    food: 
    {cookie: 1.00, 
    crisp: 0.50,
    cake: 3.00},
drinksOrdered(){
    //   for(let price of order = coffeeShop.drinks([1],[3])){
    
    //  }
    
    }
        return(`your order is ${drinksOrdered} `)
    },

    foodOrdered(){
        order = coffeeShop.food[0],[2]
        return(`your order is${foodOrdered}`)
    }
    
    
    }
   