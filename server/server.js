const express = require('express');
const bodyParser = require('body-parser');
const tasksRouter = require('./routes/tasks.router');
const app = express();
const PORT = 2828;

// body parser
app.use(bodyParser.urlencoded({extended:true}));

// server static files
app.use(express.static('server/public'));

// routes
app.use('/tasks', tasksRouter);

// port listener
app.listen(PORT, function(){
    console.log('listening on port:', PORT);
});