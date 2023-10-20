const fs = require('fs');

const text = fs.readFile('./source.txt', 'utf-8', (err, data) => {
    fs.writeFile('./destination.txt', data, err => {
        if(err){console.log(err)};
        console.log('written to destination')
    })
});