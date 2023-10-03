//Exercise1
const sum = (x, y) => (x+y);

//Exercise 2
// 1
function kgToGr(kg){
    return kg * 1000;
}
console.log(kgToGr(5));

// 2
const kgToGr2 = function(kg){
    return kg * 1000;
}
console.log(kgToGr2(6));

//3
// Function declaration doesn't have to be assigned to a variable and has to have a name, whereas function expression doesn't have a name and has to be assigned to a variable.

//4
const kgToGr3 = kg => kg * 1000;
console.log(kgToGr3(7));


//Exercise 3
(function(children=5, partner='somebody',location="beatiful country",job='programmer'){
    const body = document.querySelectorAll('body')[0];
    const result = document.createElement('h2');
    result.innerHTML = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    body.appendChild(result);

})();

//Exercise 4
