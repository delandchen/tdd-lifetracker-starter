const express = require('express');
const router = express.Router();
const security = require("../middleware/security");
const Nutrition = require('../models/nutrition');

router.post('/', async (req, res, next) => {
    try {
        const result = await Nutrition.createNutrition(req.body);
        return res.status(201).json({ result });
    }
    catch (err) {
        next(err);
    }
})

router.get('/', async (req, res, next) => {
    try {
        const result = await Nutrition.listNutritionForUser(req.body.id);
        return res.status(200).json({ result });
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;