const router = require('express').Router();

const userRoutes = require('./user-routes');
const routineRoutes = require('./routine-routes');

router.use('/users', userRoutes);
router.use('/routines', routineRoutes);

module.exports = router;
