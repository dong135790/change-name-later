const sequelize = require('../config/connection');
const seedExcercise = require('./excercisedata');
const seedMuscleGroup = require('./muscleGroupData')

const seedAll = async () => {
    await sequelize.sync({force: true})
    await seedMuscleGroup();
    await seedExcercise();
    process.exit(0);
}
seedAll();