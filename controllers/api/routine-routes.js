const router = require('express').Router();
const { Routine } = require('../../models');

// CREATE new user
router.put('/:id/add/exercies', async (req, res) => {
  try {
    // console.log(req.body)
    const instance = await Routine.findByPk(req.params.id);
    await instance.addExercises(req.body);

    res.status(200).json('sucess');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id/remove/exercies', async (req, res) => {
  try {
    // console.log(req.body)
    const instance = await Routine.findByPk(req.params.id);
    await instance.removeExercise(req.body.id);

    res.status(200).json('sucess');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;