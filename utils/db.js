const { createPool } = require("mysql2/promise");

const pool = createPool({
    host: "127.0.0.1",
    port: 3306, // This line is optional since 3306 is the default port for MySQL
    user: "root",
    password: "Ankurtiwari@123",
    database: "taskmanagement",
    namedPlaceholders: true,
});

module.exports = {
  pool,
};
