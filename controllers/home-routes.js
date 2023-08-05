const router = require('express').Router();
const { Exercise, Routine } = require('../models');

// Import custom middleware?
// const withAuth = require('../utils/auth');

// Home route
router.get('/', async (req, res) => {
    try {
        console.log('hi')
        const exerciseData = await Exercise.findAll({});
        // res.status(200).json(exerciseData);

        console.log(exerciseData)
        const workout = exerciseData.map((data) => data.get({ plain: true }));
        console.log(workout)
        res.render('home', {workout})
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});
// Get all routine
router.get('/routine', async (req,res) => {
  try {
    const allRoutine = await Routine.findAll();

    const viewRoutine = allRoutine.map((data) => data.get({ plain: true }));

    res.render('routines', {viewRoutine})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get routines by id
router.get('/routine/:id', async (req,res) => {
  try {
    const singleRoutine = await Exercise.findByPk(req.params.id, {
      include: [
      {
        model: Routine,
        attributes: [
          'id',
          'name',
          'group',
          'muscle',
          'equipment',
          'instruction',
          'difficulty',
          'image',
          'description',
        ]
      },
    ],
    });

    const routine = singleRoutine.get({ plain: true});
    res.render('routine', {routine});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.get('/exercise', async (req,res) => {
  try {
    const allExercise = await Exercise.findAll();

    const viewExercise = allExercise.map((data) => data.get({ plain: true }));

    res.render('exercise', {viewExercise})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get exercise by id
router.get('/exercise/:id', async (req,res) => {
  try {
    const singleExercise = await Exercise.findByPk(req.params.id)
    // res.status(200).json(singleExercise);

    console.log(singleExercise)
    const exercise = singleExercise.get({ plain: true });
    res.render('singleExercise', {exercise});
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