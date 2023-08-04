const router = require('express').Router();
const { Exercise } = require('../models');

// Import custom middleware?
// const withAuth = require('../utils/auth');

// Home route
router.get('/', async (req, res) => {
    try {
        const exerciseData = await Exercise.findAll();

        const workout = exerciseData.map((data) => data.get({ plain: true }));

        res.render('home', {workout})
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get('/exercise/:id', async (req,res) => {
  try {
    const singleExercise = await Exercise.findByPk(req.params.id)
    const exercise = singleExercise.get({ plain: true });
    res.render('exercise', {exercise});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router; 