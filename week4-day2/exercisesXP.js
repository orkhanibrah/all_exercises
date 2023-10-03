//Exercise 1
function infoAboutMe(){
    console.log("It's a nice evening for me")
}
infoAboutMe();

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`${personName} is ${personAge} years old and their favorite color is ${personFavoriteColor}`);
}
infoAboutPerson('David', 45, 'blue');
infoAboutPerson('Josh', 12, 'yellow');


//Exercise 2
function calculateTip(){
    let bill = prompt('How much is the bill?');
    let tip;
    if(bill < 50){
        tip = bill * 20 / 100;
    } else if (bill > 50 && bill < 200){
        tip = bill * 15/100;
    } else{
        tip = bill * 10 / 100;
    }
    console.log(`The bill was ${bill}$ and the tip was ${tip}$`);
}
calculateTip();


//Exercise 3
function isDivisible(){
    let sum = 0;
    for(let i=0; i<=500; i++){
        if(i % 23 == 0){
            console.log(i);
            sum = sum + i;  
        }
    }
    console.log(`Sum: ${sum}`);
    
}
isDivisible();

function isDivisibleParam(divisor){
    let sum = 0;
    for(let i=0; i<=500; i+=divisor){
        console.log(i);
        sum += i;
    }           
    console.log(`Sum: ${sum}`)
}

isDivisibleParam(40);
isDivisibleParam(100);


//Exercise 4
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ['banana', 'orange', 'apple'];

function myBill(){
    let price = 0;
    for (x of shoppingList){
        if(stock[x] != 0){
            price = price + prices[x];
            stock[x] -= 1;     }
    }
    console.log(price);
}
 myBill();


 //Exercise 5
 function changeEnough(itemPrice, amountOfChange){
    let quarters = amountOfChange[0] * 0.25;
    let dimes = amountOfChange[1] * 0.10;
    let nickels = amountOfChange[2] * 0.05;
    let pennies = amountOfChange[3] * 0.01;
    let changeTotal = quarters + dimes + nickels + pennies;
    if(itemPrice <= changeTotal){
        console.log('Can buy this');
        return true;
    }
    console.log("Can't buy this");
    return false;
 }

 changeEnough(10, [10, 10, 100, 11]);
 changeEnough(10, [30, 10, 100, 11]);


 //Exercise 6
 function hotelCost(){
    do {
        nights = prompt('How many nights will you be staying?');
    } while(isNaN(nights));
    console.log(nights);
    return nights * 140;
    

 }

function planeRideCost(){
    do {
        destination = prompt("What's your destination?");
    } while(!isNaN(destination));
    if(destination == 'London'){
        return 183;
    } else if (destination == 'Paris'){
        return 220;
    } else {
        return 300;
    }

}

function rentalCarCost(){
    do{
        days = prompt('How many days will you rent the car for?')
    } while(isNaN(days));
    if(days <= 10){
        cost = days * 40;
    } else {
        cost = days * 40 * 95/100;
    }
    return cost;
}

function totalVacationCost(){
    totalCost = hotelCost() + planeRideCost() + rentalCarCost();
    console.log(`The total vacation cost is ${totalCost}`);
    return totalCost;
}

totalVacationCost()