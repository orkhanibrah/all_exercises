//Exercise 2
// 1
let winBattle = () => true;

// 2
let experiencePoints = (winBattle) ? 10 : 1;
console.log(experiencePoints)


//Exercise 3
const isString = (argument) => (typeof argument == 'string') ? true : false;

//Exercise 4
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((item, index) => 
    console.log(`${index+1}# choice is ${item}`)
)


//Exercise 5
colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
colors.forEach((item, index) => 
    (index >= 3) ? 
    console.log(`${index+1}${ordinal[0]} choice is ${colors[index]}`) :
    console.log(`${index+1}${ordinal[index+1]} choice is ${colors[index]}`)
)

//Exercise 6
let bankAmount = 0;
let vat = 17;
const details = ["+200", "-100", "+146", "+167", "-2900"];
function calculateVat(){
   details.forEach((item, index, newarr) => 
   {
    newarr[index] = item * vat / 100;
    bankAmount += newarr[index];
   })
   console.log(bankAmount.toFixed(2));
   
}

calculateVat();


