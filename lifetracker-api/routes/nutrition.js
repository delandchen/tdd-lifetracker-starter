const express = require('express');
const router = express.Router();
const security = require("../middleware/security");
const Nutrition = require('../models/nutrition');

router.post('/', async (req, res, next) => {
    try {
        const { email } = res.locals.user;
        const result = await Nutrition.createNutrition({...req.body, email});
        return res.status(201).json({ result });
    }
    catch (err) {
        next(err);
    }
})

router.get('/', security.requireAuthenicatedUser, async (req, res, next) => {
    try {
        const { email } = res.locals.user;
        const result = await Nutrition.listNutritionForUser(email);
        return res.status(200).json({ result });
    }
    catch (err) {
        next(err);
    }
})

router.get('/id/:nutritionId', security.requireAuthenicatedUser, async (req, res, next) => {
    try {
        const nutritionId = req.params.nutritionId;
        const result = await Nutrition.getNutritionById(nutritionId);
        return res.status(200).json({ result });
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;