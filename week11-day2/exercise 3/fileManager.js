const fs = require('fs');

const readFile = (fileName) => {
    fs.readFile(`./${fileName}.txt`, 'utf8', (err, data) => {
        if(err){
            console.log(err);
            return;
        }
        console.log(data);
    })
}

const writeFile = (fileName, text) => {
    fs.writeFile(`./${fileName}.txt`, text, err => {
        if(err){
            console.log(err)
        }
    });
}



module.exports = {readFile, writeFile};
