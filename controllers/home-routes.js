const router = require('express').Router();
const { Exercise, User, MuscleGroup } = require('../models');

// Import custom middleware?
// const withAuth = require('../utils/auth');

// Home route Gets all exercise and group
router.get('/', async (req, res) => {
    try {
        console.log('hi')
        const exerciseData = await Exercise.findAll({});
        const allGroup = await MuscleGroup.findAll();

        const viewAllGroup = allGroup.map((data) => data.get({ plain: true }));
        // res.status(200).json(exerciseData);

        const workout = exerciseData.map((data) => data.get({ plain: true }));
        console.log(viewAllGroup)
        console.log(workout)
        res.render('home', {workout, viewAllGroup})
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});
// Get all MuscleGroup
router.get('/group', async (req,res) => {
  try {
    const allGroup = await MuscleGroup.findAll();

    const viewAllGroup = allGroup.map((data) => data.get({ plain: true }));

    res.render('group', {viewAllGroup})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get muscleGroup by id
router.get('/group/:id', async (req,res) => {
  try {
    const singleGroup = await MuscleGroup.findByPk(req.params.id, {
      include: [
      {
        model: Exercise,
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
// ADD A SQL COMMAND LIKELY HERE TO DISPLAYE BASED OFF OF GROUP 
    const group = singleGroup.get({ plain: true});
    res.render('single-routine', {group});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// Get all exercise
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