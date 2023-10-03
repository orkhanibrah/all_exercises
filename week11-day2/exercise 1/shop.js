const products = require('./products.js');

const find = (itemName) => {
    const product = products.filter(item => 
        item.name === itemName);
    return product;
    
    }


console.log(find('book'));
console.log(find('toy car'));
console.log(find('chess set'));
