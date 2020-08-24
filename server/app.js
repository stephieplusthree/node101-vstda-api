const express = require('express');
const morgan = require('morgan');

const app = express();

app.get('/api/todoItems', (req, res) => {
    const todoItems = [
        {
            todoItemId: 0,
            name: 'an item',
            priority: 3,
            completed: false
        },
        {
            todoItemId: 1,
            name: 'another item',
            priority: 2,
            completed: false
        },
        {
            todoItemId: 2,
            name: 'a done item',
            priority: 1,
            completed: true
        }
    ];

    res.json(todoItems);
});

module.exports = app;
