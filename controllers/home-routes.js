const router = require('express').Router();
const { Op } = require('sequelize');
const e = require('express');
const sequelize = require('../config/connection');
const { Exercise, User, Group, Routine } = require('../models');
const withAuth = require('../utils/auth');

// Import custom middleware?
// const withAuth = require('../utils/auth');

// Home route Gets all exercise and group
router.get('/', withAuth, async (req, res) => {
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
        const allUser = await User.findAll();
        const viewAllUser = allUser.map((data) => data.get({ plain: true }));
        const viewAllGroup = allGroup.map((data) => data.get({ plain: true }));
        console.log('LOGGED IN', req.session.loggedIn)
        res.render('home', {
        viewAllGroup,
        viewAllUser,
        loggedIn: req.session.loggedIn,

        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});
// Get all Group WE CURRENTLY DO NOT USE THIS 
router.get('/group', withAuth, async (req,res) => {
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
router.get('/group/:id', withAuth, async (req,res) => {
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
    console.log(group)
    res.render('single-group', {group});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// Get all exercise. FINISHED
router.get('/exercise', withAuth, async (req,res) => {
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
router.get('/exercise/:id', withAuth, async (req,res) => {
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
router.get('/routine', withAuth, async (req,res) => {
  try {
    const allRoutine = await Routine.findAll({
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
            'routine_id',
          ]
        },
      ],
    });

    const routine = allRoutine.map((data) => data.get({ plain: true }));
    console.log(routine)

    res.render('routine', {routine})
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get routine by id
router.get('/routine/:id', withAuth, async (req,res) => {
  try {
    const singleRoutine = await Routine.findByPk(req.params.id, {
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
            'routine_id',
          ],
        },
      ],
    });
    const currentExercieData = await singleRoutine.getExercises();
    const currentExercieIds = currentExercieData.map(o => o.id);
    const filteredExercises = await Exercise.findAll({
      where: {
        id: {
          [Op.not]: currentExercieIds
        }
      },
    })
    const listOfExercies = filteredExercises.map(o => o.get({ plain: true }));

    console.log(listOfExercies);

    const allExerciseButRoutine = await Exercise.findAll({})
    const viewExercise = allExerciseButRoutine.map((data) => data.get({ plain: true }));
    
    const routine = singleRoutine.get({ plain: true });
    // res.status(200).json(routine);
    // console.log(routine)
    // console.log(viewExercise)
    res.render('single-routine', { routine, viewExercise, listOfExercies });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Create Routine TODO
router.post('/createRoutine', async (req, res) => {
  try {
    const createRoutine = await Routine.create({
      include: Exercise,
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
        'routine_id',
      ]
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

// PUT Update Existing Routing TODO
router.put('/update', async (req,res) => {
  try {
    const allExercise = await Exercise.findAll();

    const viewExercise = allExercise.map((data) => data.get({ plain: true }));
    res.status(200).json(viewExercise)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// PUT Delete Routine DONE
router.put('/delete/:id', async (req,res) => {
  try {
    // find routine by id 
    const routine = await Routine.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!routine) {
      res.status(404).json({message: 'No routine data based on id!'});
      return;
    }
    res.status(200).json(routine)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update Routine
router.put('/routine',async (req, res) => {
  try {
    const updateExercise = await Exercise.findAll();
    const routine = updateExercise.map((data) => data.get({ plain: true }));
    res.status(200).json(routine);
    
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
  
    res.render('login', { loggedIn: req.session.loggedIn });
  });

// Login route
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup', { loggedIn: req.session.loggedIn });
});

module.exports = router; 