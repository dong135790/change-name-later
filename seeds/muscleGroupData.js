const { Group } = require('../models');

const MuscleGroupdata = [
  {
    name: 'Shoulder',
    image: 'j',
  },
  {
    name: 'Chest',
    image: 'j',
  },
  {
    name: 'Arms',
    image: 'j',
  },
  {
    name: 'Back',
    image: 'j',
  },
  {
    name: 'Arms',
    image: 'j',
  },
  {
    name: 'Legs',
    image: 'j',
  },
  {
    name: 'Abdominal',
    image: 'j',
  },
];

const seedMuscleGroup = () => Group.bulkCreate(MuscleGroupdata);

module.exports = seedMuscleGroup;
