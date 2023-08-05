const { MuscleGroup } = require('../models');

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

const seedMuscleGroup = () => MuscleGroup.bulkCreate(MuscleGroupdata);

module.exports = seedMuscleGroup;
