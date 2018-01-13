const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'todo_app',
    host: 'localhost',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 5000
};

// create instance of pool object
const pool = new Pool(config);

module.exports = pool;