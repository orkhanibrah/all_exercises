const fs = require('fs');

const read = () =>  {fs.readFile('./files/file-data.txt', 'utf-8', (err, data) => {
    if(err){console.log(err)};
    console.log('File: ' + '\n' + data);
})};

module.exports = read;