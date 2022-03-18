let coffeeIsGrinding = false;
const pressGrindBeans = ()=> {
    if (coffeIsGrinding){
        console.log("stopping grind")
    }
    else {
        console.log("coffee is grinding")
    }
}

const cashWithdraw = (amount , accNum) => {
    console.log(`withdrawing ${amount} from account ${accNum}`);
}
cashWithdraw(300,1234);
cashWithdraw(100,2040);
cashWithdraw(50,9876);
// these are arguments.
// we can use global variables in funtions.

// ----------------------------------

const addUp = (num1, num2) => {
    return num1+num2;
}
console.log(addUp(7,3));

// return function

// ----------------------------------

