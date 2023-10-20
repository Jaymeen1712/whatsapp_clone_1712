const mysql = require("mysql2");
const config = require("../config");

const connection = mysql
  .createConnection({
    port: config.mysql.port,
    host: config.mysql.host,
    user: config.mysql.username,
    password: config.mysql.password,
    database: config.mysql.database,
  })
  .promise();

const makeUserTable = require("./user-table");
const userTable = makeUserTable({ connection });

const makeMessageTable = require("./message-table");
const messageTable = makeMessageTable({ connection });

module.exports = Object.freeze({
  userTable,
  messageTable
});
