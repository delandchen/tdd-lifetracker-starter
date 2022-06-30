// Imports
const authRoutes = require('./routes/auth');
const security = require('./middleware/security')

// Initialize server dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

app.use('/auth', authRoutes);

// 404 Error Handler
app.use((req, res, next) => {
    return next(new NotFoundError());
});

// Generic error handler 
app.use((error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message;

    return res.status(status).json(
        {error: {message, status}}
    )
});

// Exports
module.exports = app;
