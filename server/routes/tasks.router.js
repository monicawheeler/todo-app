const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// get all tasks
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM tasks ORDER BY category_id';
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

// get all categories
router.get('/categories', (req, res) => {
    const queryText = 'SELECT * FROM categories ORDER BY id';
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

// post added task
router.post('/', (req, res) => {
    const queryText = 'INSERT INTO tasks (description, category_id) VALUES($1, $2)';
    pool.query(queryText,[req.body.description, req.body.categoryId])
        // runs on success
        .then((result) => {
            res.sendStatus(201);
        })
        // error handling
        .catch((err) => {
            res.sendStatus(500);
        });
});

// update complete status to true
router.put('/complete/:id', (req,res) => {
    const queryText = `UPDATE tasks SET complete='TRUE' WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        // runs on successful query
        .then((result) => {        
            res.sendStatus(200);
        })
        // error handling
        .catch((err) => {
            res.sendStatus(500);
        });
});

// update complete status to false
router.put('/:id', (req,res) => {
    const queryText = `UPDATE tasks SET complete='FALSE' WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        // runs on successful query
        .then((result) => {        
            res.sendStatus(200);
        })
        // error handling
        .catch((err) => {
            res.sendStatus(500);
        });
});

// delete task from database
router.delete('/:id', (req,res) => {
    const queryText = `DELETE FROM tasks WHERE id=$1`;
    pool.query(queryText, [req.params.id])
        // runs on successful query
        .then((result) => {        
            res.sendStatus(200);
        })
        // error handling
        .catch((err) => {
            res.sendStatus(500);
        });
});

module.exports = router;