// Imports
const authRoutes = require('./routes/auth');
const nutritionRoutes = require('./routes/nutrition')
const security = require('./middleware/security')

// Initialize server dependencies
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Middleware
// Cross-origin resoure sharing for all origins
app.use(cors());
// Log requests info
app.use(morgan('tiny'));
// Parse JSON payloads
app.use(express.json());

// For ever request, check if a token exists in the authorization header
// If it does, attach decoded user to res.locals;
app.use(security.extractUserFromJwt);

// Routes
app.use('/auth', authRoutes);
app.use('/nutrition', nutritionRoutes);

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
