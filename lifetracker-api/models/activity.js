const { BadRequestError } = require('../utils/errors')
const db = require('../db');


class Activity {
    static async getAvgCaloriesPerCategory() {
        const query = 'SELECT AVG(calories) AS calories, category FROM nutrition GROUP BY category LIMIT 6';

        const result = await db.query(query);
        const userId = result.rows;

        return userId;
    }

    static async getTotalCaloriesPerDay() {
        const query = 'SELECT SUM(calories) AS calories, createdAt FROM nutrition GROUP BY createdAt LIMIT 6';

        const result = await db.query(query);
        const userId = result.rows;

        return userId;
    }
}

module.exports = Activity;