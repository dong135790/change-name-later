const { Group } = require('../models');

const MuscleGroupdata = [
  {
    name: 'Upper Body',
  },
  {
    name: 'Lower Body',
  },
  {
    name: 'Arms',
  },
  {
    name: 'Legs',
  },
  {
    name: 'Abdominal'
  },
  {
    name: 'Cardio'
  }
];

const seedMuscleGroup = () => Group.bulkCreate(MuscleGroupdata);

module.exports = seedMuscleGroup;
