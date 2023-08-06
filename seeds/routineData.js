const { Routine } = require('../models');

const routineData = [
  {
    name: 'Routine 1',
  },
  {
    name: 'Routine 2',
  },
];

const seedRoutine = () => Routine.bulkCreate(routineData);

module.exports = seedRoutine;
