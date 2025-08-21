const { Pool } = require('pg');

const pool = new Pool({
  user: 'user',
  host: 'db',            // 'db' will be the service name in docker-compose
  database: 'mydb',
  password: 'password',  // match env in docker-compose
  port: 5432,
});

module.exports = pool;

