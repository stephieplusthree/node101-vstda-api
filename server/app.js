const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
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
    
    //ROUTE: /
    app.get('/', function(req, res) {
        var status = {'status': 'ok'};
        res.join(status)
    });

    //ROUTE: api/TodoItems
    app.get('/api/TodoItems', function(req, res) {
        res.json(todoItems);
    });

    //ROUTE: api/TodoItems/:number
    app.get('/api/TodoItems/:number', function(req, res) {
        var num = parseInt(req.params.number);
        res.json(todoItems[itemIds.indexOf(num)]);
    });
    
module.exports = app;
