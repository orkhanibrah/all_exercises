// Exercise 1
function compareToTen(num){
    return new Promise((resolve, reject) => {
        num <= 10 ? resolve('resolved') : reject('rejected');
        
    })
}



//Exercise 2
let delayed = new Promise((res, rej) => {
    setTimeout(() => {
        res('success');
    }, 4000)
})

delayed.then(res => console.log(res));

// Exercise 3
let three = new Promise((res, rej) => {
    res(3);
})

let boo = new Promise((res, rej) => {
    rej('Boo!');
})

