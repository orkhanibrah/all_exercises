const express = require('express');


const app = express();

app.listen(3000, () => {
    console.log('server is listening on port 3000')
});

const data = require('./data/dataService.js');

app.get('/posts', (req, res) => {
    const posts = data.then(res => res.data)
    res.json(posts);
});