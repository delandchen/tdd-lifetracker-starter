const { BadRequestError } = require('../utils/errors')
const db = require('../db');


class Nutrition {
    static async createNutrition(data) {
        const requiredFields = ["name", "category", "calories", "image_url", "user_id"];

        requiredFields.forEach(field => {
            if (!data.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field}`);
            }
        })

        const name = data.name;
        const category = data.category;
        const calories = data.calories;
        const image_url = data.image_url;
        const user_id = data.user_id;

        const results = await db.query(
        `
        INSERT INTO nutrition (
            name,
            category,
            calories,
            image_url,
            user_id
        )
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id, name, category, calories, image_url, user_id;
        `, [name, category, calories, image_url, user_id]);

        const row = results.rows[0];

        return row;
    }

    static async listNutritionForUser(id) {
        const results = await db.query(
            `SELECT name, category, calories, image_url, user_id FROM nutrition WHERE user_id=$1;`, [id]);
    
            return results;
    }
}

module.exports = Nutrition;