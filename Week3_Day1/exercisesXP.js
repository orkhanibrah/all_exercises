//Exercise 1
let favFood = 'chicken';
let favMeal = 'dinner';
console.log(`I eat ${favFood} at every ${favMeal}`);


//Exercise 2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength);

let myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}`;
console.log(myWatchedSeriesSentence);

console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`);

myWatchedSeries[2] = 'friends';
console.log(myWatchedSeries);

myWatchedSeries.push('blacklist');
console.log(myWatchedSeries);

myWatchedSeries.unshift('the office');
console.log(myWatchedSeries)

myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries);

console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);


//Exercise 3
let celcius = 0;
console.log(`${celcius}°C is ${celcius/5*9+32}°F`);


//Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: 55 because both are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23 because a is changed to 2.
// Actual: 23

//c is undefined because there's no value yet.


//Exercise 5
console.log(typeof(15))
// Prediction: number
// Actual: number

console.log(typeof(5.5))
// Prediction: number
// Actual: number

console.log(typeof(NaN))
// Prediction: boolean because it returns true or false
// Actual: number

console.log(typeof("hello"))
// Prediction: hello is a string
// Actual: string

console.log(typeof(true))
// Prediction: boolean
// Actual: boolean

console.log(typeof(1 != 2))
// Prediction: boolean because 1!= 2 is true
// Actual: boolean

console.log("hamburger" + "s")
// Prediction: hamburgers
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: will result in error
// Actual: NaN

console.log("1" + "3")
// Prediction: 13
// Actual: 13

console.log("1" - "3")
// Prediction: -2
// Actual: -2

console.log("johnny" + 5)
// Prediction: type error
// Actual: 'johnny5'

console.log("johnny" - 5)
// Prediction: type error
// Actual: NaN

console.log(99 * "hello")
// Prediction: hello back to back 99 times
// Actual: NaN

console.log(1 != 1)
// Prediction: false
// Actual: false

console.log(1 == "1")
// Prediction: true because the value is same
// Actual: true

console.log(1 === "1")
// Prediction: false because they are not absolute same
// Actual: false
