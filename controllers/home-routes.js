const router = require('express').Router();
const sequelize = require('../config/connection');
const { Exercise, User, Group, Routine } = require('../models');

// Import custom middleware?
// const withAuth = require('../utils/auth');

// Home route Gets all exercise and group
router.get('/', async (req, res) => {
    try {
        console.log('hi')
        const allGroup = await Group.findAll({
          include: [
            {
              model: Exercise,
              attributes: [
                'id',
                'name',
                'muscle',
                'equipment',
                'instruction',
                'difficulty',
                'image',
                'description',
                'group_id',
              ]
            },
          ],
        });
    
        const viewAllGroup = allGroup.map((data) => data.get({ plain: true }));
        res.render('home', { viewAllGroup})
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});
// Get all Group WE CURRENTLY DO NOT USE THIS 
router.get('/group', async (req,res) => {
  try {
    const allGroup = await Group.findAll({
      include: [
        {
          model: Exercise,
          attributes: [
            'id',
            'name',
            'muscle',
            'equipment',
            'instruction',
            'difficulty',
            'image',
            'description',
            'group_id',
          ]
        },
      ],
    });

    const viewAllGroup = allGroup.map((data) => data.get({ plain: true }));
    res.status(200).json(viewAllGroup);

    // res.render('group', {viewAllGroup})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get Group by id NOT FINISHED
router.get('/group/:id', async (req,res) => {
  try {
    const singleGroup = await Group.findByPk(req.params.id, {
      include: [
      {
        model: Exercise,
        attributes: [
          'id',
          'name',
          'muscle',
          'equipment',
          'instruction',
          'difficulty',
          'image',
          'description'
        ]
      },
    ],
    });
    
// ADD A SQL COMMAND LIKELY HERE TO DISPLAYE BASED OFF OF GROUP 
    const group = singleGroup.get({ plain: true});
    res.render('single-group', {group});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// Get all exercise. FINISHED
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

// Get exercise by id. Finished
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

// Get all routine
router.get('/routine', async (req,res) => {
  try {
    const allRoutine = await Routine.findAll();

    const routine = allRoutine.map((data) => data.get({ plain: true }));
    console.log(routine)

    res.render('routine', {routine})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router; 