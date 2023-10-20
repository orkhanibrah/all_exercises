const fs = require('fs');

const files = fs.readdir('./', (err, fileNames) => {
    if(err){console.log(err)};
    console.log(`files: ${fileNames}`)
});