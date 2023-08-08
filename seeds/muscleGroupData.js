const { Group } = require('../models');

const MuscleGroupdata = [
  {
    name: 'Shoulder',
    image: 'shoulder-workout.webp',
    description: 'Shoulder workout group'
  },
  {
    name: 'Chest',
    image: 'best-chest-workout.jpg',
    description: 'Chest workout group'
  },
  {
    name: 'Arms',
    image: 'arm-muscles-pic.webp',
    description: 'Arm workout group',
    nextLine: 'Arm'
  },
  {
    name: 'Back',
    image: 'back-workout.jpg',
  },
  {
    name: 'Legs',
    image: 'legs-workout.jpg',
  },
  {
    name: 'Abdominal',
    image: 'ab-workouts.jpg',
  },
];

const seedMuscleGroup = () => Group.bulkCreate(MuscleGroupdata);

module.exports = seedMuscleGroup;
