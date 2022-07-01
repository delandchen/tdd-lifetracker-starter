const { BadRequestError, UnauthorizedError } = require('../utils/errors');
const db = require('../db');
const bcrypt = require('bcrypt');
const { BCRYPT_WORK_FACTOR } = require('../config');

class User {
    static makePublicUser(user) {
        return {
            id: user.id,
            email: user.email,
            username: user.username,
            createdAt: user.createdAt,
        }
    }

    static async login(credentials) {
        // Check if the request has the required fields
        const requiredFields = ["email", "password"];

        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body`);
            }
        });

        // Check if given a valid email
        if (credentials.email.indexOf("@") <= 0) {
            throw new BadRequestError('Invalid Email');
        }

        // Check if the user trying to log in is an existing user
        const user = await User.fetchUserByEmail(credentials.email);
        // If the user does not exist, throw error
        if (!user) {
            throw new BadRequestError('Email/User does not exist')
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);

        if (isValid) {
            return user;
        }

        throw new UnauthorizedError("Invalid email/password combo");
    }

    static async register(credentials) {
        // Check if the request has the required fields
        const requiredFields = ["email", "username", "first_name", "last_name", "password"];

        requiredFields.forEach(field => {
            if (!credentials.hasOwnProperty(field) || credentials[field] == "") {
                throw new BadRequestError(`Missing ${field} in request body`);
            }
        });

        // Check if given a valid email
        if (credentials.email.indexOf("@") <= 0) {
            throw new BadRequestError('Invalid Email');
        }

        // Check if user already exists
        const existingUser = await User.fetchUserByEmail(credentials.email);
        if (existingUser) {
            throw new BadRequestError('Existing User');
        }

        // Destructure variables, lowercase email, and hash the password
        const username = credentials.username;
        const email = credentials.email.toLowerCase();
        const first_name = credentials.first_name;
        const last_name = credentials.last_name;
        const hashedPassword = await User.hashPassword(credentials.password);

        const results = await db.query(
            `INSERT INTO users (
                username,
                email,
                first_name,
                last_name,
                password
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING id, username, email, first_name, last_name, password;
            `, [username, email, first_name, last_name, hashedPassword]);

        
        const user = results.rows[0];

        return user;

    }

    static async fetchUserByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided to fetch");
        }

        const query = 'SELECT * FROM users WHERE email = $1';

        const result = await db.query(query, [email.toLowerCase()]);

        const user = result.rows[0];

        return user;
    }

    static async hashPassword(password) {
        if (!password) {
            throw new BadRequestError("No password to hash");
        }

        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

        return hashedPassword;
    }
}

module.exports = User;