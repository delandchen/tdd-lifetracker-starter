// Initialize server dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();


// Middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());


// Exports
module.exports = app;
