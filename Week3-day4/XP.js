//Exercise 1
let x = 1;
let y = 2;

if(x > y){
    console.log('x is the biggest number');
} else if(x < y){
    console.log('y is the biggest number');
} else {console.log('x equals y')};


//Exercise 2
let newDog = 'Chihuahua';
console.log(newDog.length)
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if(newDog == 'Chihuahua'){
    console.log('I love Chihuahuas, it’s my favorite dog breed')
} else {
    console.log(`I don't care, I prefer cats`)
}

//Exercise 3
let num = prompt('Enter a number');
if(num % 2 == 0){
    console.log(`${num} is an even number`);
} else {
    console.log(`${num} is an odd number`);
}


//Exercise 4
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if(users.length == 0){
    console.log('noone is online')
} else if(users.length == 1){
    console.log(`${users[0]} is online`)
} else if (users.length == 2){
    console.log(`${users[0]} and ${users[1]} are online`)
} else {
    console.log(`${users[0]}, ${users[1]} and ${users.length - 2} more are online`)
}