const express = require('express');
const router = express.Router();

const books = [
    {id:1, name:'Example book'}
];

// Get all books
router.get('/', (req, res) => {
    res.json(books)
});

// Add a new book
router.post('/', (req, res) => {
    const newBook = {
        id:books.length+1,
        name:req.body.name
    };
    books.push(newBook);
})

// Update a book by ID
router.put('/:bookId', (req, res) => {
    const id = Number(req.params.bookId);
    const index = books.findIndex(book => book.id === id);
    const updatedBook = {
        id:books[index].id,
        name:req.body.name
    };
    books[index] = updatedBook;
})

// Delete a book by ID
router.delete('/:bookId', (req, res) => {
    const id = Number(req.params.bookId);
    const index = books.findIndex(book => book.id === id);
    books.splice(index, 1);
})

module.exports = router;