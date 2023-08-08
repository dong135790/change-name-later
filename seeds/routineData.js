const { Routine } = require('../models');

const routineData = [
  {
    name: 'Routine 1',
  },
  {
    name: 'Routine 2',
  },
  {
    name: 'Routine 3',
  },
];

const seedRoutine = () => Routine.bulkCreate(routineData);

module.exports = seedRoutine;
