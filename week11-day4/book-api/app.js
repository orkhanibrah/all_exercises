const express = require('express');
const app = express();

app.listen(5001, () => {
    console.log('server is listening on port 5001')
});

const books = [
    {id:1, title:'title-1', author:'author-1', year:2001},
    {id:2, title:'title-2', author:'author-2', year:2002},
    {id:3, title:'title-3', author:'author-3', year:2003},
    {id:4, title:'title-4', author:'author-4', year:2004}
];

app.get('/api/books', (req,res) => {
    res.json(books)
});

app.get('/api/books/:bookId', (req, res) => {
    const id = Number(req.params.bookId);
    const book = books.find((item) => item.id === id);
    if (!book) {res.status(404).send('Book not found')};

    res.status(200).json(book);
})

app.use(express.json());

app.post('/api/books', (req,res) => {
    const newBook = {
        id:books.length + 1,
        title:req.body.title,
        author:req.body.author,
        year:req.body.year
    };

    books.push(newBook);
    res.status(201).json(newBook);
})

