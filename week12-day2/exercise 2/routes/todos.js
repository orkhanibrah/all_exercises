const express = require('express');
const router = express.Router();

const todos = [
    {id:1, name:'Exercise 1'}
];

// Get all to-do items
router.get('/', (req,res) => {
    res.json(todos);
})

// Add a new to-do item
router.post('/', (req, res) => {
    const newItem = {
        id:todos.length + 1,
        name:req.body.name
    };
    todos.push(newItem);
})

// Update a to-do item by ID
router.put('/:itemId', (req, res) => {
    const id = Number(req.params.itemId);
    const index = todos.findIndex(item => item.id === id);
    const updatedItem = {
        id:todos[index].id,
        name:req.body.name
    };
    todos[index] = updatedItem;
});

// Delete a to-do item by ID
router.delete('/:itemId', (req, res) => {
    const id = Number(req.params.itemId);
    const index = todos.findIndex(item => item.id === id);
    todos.splice(index, 1)
});

module.exports = router;
