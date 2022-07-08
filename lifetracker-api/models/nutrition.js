const { BadRequestError } = require('../utils/errors')
const db = require('../db');


class Nutrition {
    static async createNutrition(data) {
        const requiredFields = ["name", "category", "calories", "image_url"];

        requiredFields.forEach(field => {
            if (!data.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field}`);
            }
        })

        // Grab the users id
        const userId = await Nutrition.fetchUserIdByEmail(data.email);
        if (!userId) {
            throw new BadRequestError('Not Existing User');
        }

        
        const name = data.name;
        const category = data.category;
        const calories = data.calories;
        const image_url = data.image_url;
        const user_id = userId;

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

    static async listNutritionForUser(email) {
        if (!email) {
            throw new BadRequestError("Missing email");
        }
        const results = await db.query(
            `SELECT nutrition.id, name, category, calories, image_url, user_id FROM nutrition 
            JOIN users ON nutrition.user_id = users.id
            WHERE email=$1;`, [email.toLowerCase()]);
    
            return results.rows;
    }

    static async getNutritionById(nutritionId) {
        if (!nutritionId) {
            throw new BadRequestError("Missing Nutrition ID");
        }

        const results = await db.query(
            `
            SELECT * FROM nutrition WHERE id = $1 
            `, [Number(nutritionId)]
        )

        return results.rows[0];
    }

    static async fetchUserIdByEmail(email) {
        if (!email) {
            throw new BadRequestError("No email provided to fetch");
        }

        const query = 'SELECT id FROM users WHERE email = $1';

        const result = await db.query(query, [email.toLowerCase()]);
        
        const userId = result.rows[0].id;

        return userId;
    }
}

module.exports = Nutrition;