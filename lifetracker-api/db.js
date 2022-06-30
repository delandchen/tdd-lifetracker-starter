const { Client } = require("pg");
const { getDatabaseUri } = require("./config.js");
require("colors");

const db = new Client({connectionString: getDatabaseUri()});

db.connect((err) => {
    if (err) {
        console.error("Connection error".red, err.stack);
    }
    else {
        console.log("Successfully connected to psotgres db!".blue);
    }
})

module.exports = db;