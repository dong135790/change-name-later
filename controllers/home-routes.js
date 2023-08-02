const router = require('express').Router();
const { Exercise } = require('../models');

// Import custom middleware?
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const exerciseData = await Exercise.findAll();

        const workout = exerciseData.map((data) => data.get({ plain: true }));

        res.render('homepage', {workout})
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
})

module.exports = router;