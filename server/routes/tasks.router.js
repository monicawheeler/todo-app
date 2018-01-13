const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

console.log('hit the tasks router file');

// get all tasks
router.get('/', (req, res) => {
    console.log('got inside the router');
    
    const queryText = 'SELECT * FROM tasks';
    pool.query(queryText)
        // runs on success
        .then((result) => {
            res.send(result.rows);
        })
        // error handling
        .catch((err) => {
            res.sendStatus(500);
        });
});
