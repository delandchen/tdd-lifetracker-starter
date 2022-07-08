const express = require('express');
const router = express.Router();
const security = require("../middleware/security");
const Activity = require('../models/activity');

router.get("/avgCalories", security.requireAuthenicatedUser, async (req, res, next) => {
    try {
        const results = await Activity.getAvgCaloriesPerCategory();
        console.log("Avg calores is: " + JSON.stringify(results))
        return res.status(200).json({ result: results })
    }
    catch (err) {
        next(err);
    }
})

router.get("/totalCalories", security.requireAuthenicatedUser, async (req, res, next) => {
    try {
        const results = await Activity.getTotalCaloriesPerDay();
        console.log("Total calories is: " + JSON.stringify(results))
        return res.status(200).json({ result: results })
    }
    catch (err) {
        next(err);
    }
})

module.exports = router;