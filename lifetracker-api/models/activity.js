const { BadRequestError } = require('../utils/errors')
const db = require('../db');


class Activity {
    static async getAvgCaloriesPerCategory(email) {
        const query = `SELECT AVG(calories) AS calories, category FROM nutrition 
        JOIN users ON nutrition.user_id = users.id WHERE email=$1 GROUP BY category LIMIT 6`;

        const result = await db.query(query, [email]);
        const userId = result.rows;

        return userId;
    }

    static async getTotalCaloriesPerDay(email) {
        const query = `SELECT SUM(calories) AS calories, nutrition.createdAt FROM nutrition 
        JOIN users ON nutrition.user_id = users.id WHERE email=$1 GROUP BY nutrition.createdAt LIMIT 6`;

        const result = await db.query(query, [email]);
        const userId = result.rows;

        return userId;
    }
}

module.exports = Activity;