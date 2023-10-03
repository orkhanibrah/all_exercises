// Exercise 4
const navbar = document.querySelectorAll('nav')[0];

// (function(){
//     let username = prompt('What is your name?');
//     let newUser = document.createElement('div');
//     newUser.innerHTML = username;
//     navbar.appendChild(newUser);
//     console.log(username)
// })();

// Exercise 5
function makeJuice(size){
    const ingredients = [];
    function addIngredients(ingredient1, ingredient2, ingredient3){
        body = document.querySelectorAll('body')[0];
        sentence = document.createElement('h3');
        sentence.innerHTML = `The client wants a ${size} drink, containing ${ingredient1}, ${ingredient2}, ${ingredient3}`;
        body.appendChild(sentence);
        ingredients.push(ingredient1, ingredient2, ingredient3);
        function displayJuice(){
            sentence1 = document.createElement('h3');
            sentence1.innerHTML = `The client wants a ${size} drink, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}`;
            }
        return displayJuice();
    }

    addIngredients('whiskey', 'coke', 'ice');
    addIngredients('orange', 'banana', 'apple');
}

makeJuice('large');


