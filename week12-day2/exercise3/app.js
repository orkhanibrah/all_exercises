const express = require('express');
const app = express();

const routes = require('./routes/books');

app.listen(3000, () => {
    console.log('Listening on 3000')
});

app.use(express.json());
app.use('/books', routes);

