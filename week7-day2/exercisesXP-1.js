// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}


// #1.1 - run in the console:
funcOne()
// Prediction: a will be 3, because it can be accesses within the function and meets the conditional's requirement.
// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// We'd get an error saying can't declare a constant variable.
//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
// a is still 0 because funcTwo hasn't been run yet.
funcTwo()
funcThree()
// a now will be 5 because it's global changeable variable accessible within funcTwo.
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// We'll get an error while running funcTwo.


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()
// a is now "hello" because it's changed in funcFour.
//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// a is now "test" because it's changed in funcSix.
// #4.2 What will happen if the variable is declared 
// with const instead of let ?
// const variables cannot be changed.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// a will be 5 because if conditional is true and a is changed. a is also 5 outside the if block.
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// if a is const then we get an error.