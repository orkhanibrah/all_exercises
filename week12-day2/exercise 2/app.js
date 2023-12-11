const express = require('express');

const app = express();

const routes = require('./routes/todos.js')

app.listen(3000, () => {
    console.log('Listening 3000')
});

app.use(express.json());
app.use('/items', routes);

