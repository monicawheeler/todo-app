const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// get all tasks
router.get('/', (req, res) => {
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

module.exports = router;