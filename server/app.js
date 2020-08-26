const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

    //Mock Data
    let todoItems = [
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

    itemIds = [0,1,2];
    
    // Get ROUTE: / with a generic object
    app.get('/', function(req, res) {
       res.status(200).json({ "status":"ok" }); 
    });

    //Get ROUTE: api/TodoItems to respond with a single item with a matching todoItemId
    app.get('/api/TodoItems', function(req, res) {
        res.status(200).send(todoItems);
    });

    //Get ROUTE: /api/TodoItems/:number to add an item, if todoItemId already exists overwrite the existing item
    app.get('/api/TodoItems/:number', function(req, res) {
        var num = parseInt(req.params.number);
        res.json(todoItems[itemIds.indexOf(num)]);
    });

    //Post ROUTE: /api/TodoItems to send back a copy of the item that was posted in the body of the response
    app.post('/api/TodoItems/', function(req, res) {
        if(itemIds.includes(req.body.todoItemId)) {
            todoItems.splice(itemIds.indexOf(req.body.todoItemId, 1, req.body));
        } else {
            todoItems.push(req.body);
            itemIds.push(req.body.todoItemId);
        };
        res.status(201).send(req.body);
    });

    //Delete ROUTE: /api/TodoItems/:number to remove matching todoItemId from dataset and respond to the request with the deleted item.    
    app.delete('/api/TodoItems/:number', function(req, res) {
        var num = parseInt(req.params.number);
        res.json(todoItems[num]);ll
        todoItems.splice(itemIds.indexOf(num), 1);
        itemIds.splice(itemIds.indexOf(num), 1);
    });

module.exports = app;
