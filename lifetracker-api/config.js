require('dotenv').config();
require('colors');

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;
const BCRYPT_WORK_FACTOR = process.env.BCRYPT_WORK_FACTOR ? Number(process.env.BCRYPT_WORK_FACTOR) : 13;
const SECRET_KEY = process.env.SECRET_KEY || "123secretkey123";
const REACT_APP_REMOTE_HOST_URL = process.env.REACT_APP_REMOTE_HOST_URL;

const getDatabaseUri = () => {
    const dbUser = process.env.DATABASE_USER || "postgres"
    const dbPass = process.env.DATABASE_PASS ? encodeURI(process.env.DATABASE_PASS) : "rams1359"
    const dbHost = process.env.DATABASE_HOST || "0.0.0.0"
    const dbPort = process.env.DATABASE_PORT || 5432
    const dbName = process.env.DATABASE_NAME || "lifetracker"

    return process.env.DATABASE_URL || `postgresql://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}`
};

console.log("App Config".red)
console.log("PORT:".blue, PORT)
console.log("Database URI:".blue, getDatabaseUri())
console.log("---")

module.exports = {
    PORT,
    getDatabaseUri,
    BCRYPT_WORK_FACTOR,
    SECRET_KEY,
    REACT_APP_REMOTE_HOST_URL,
}