const sequelize = require('../config/connection');
const seedExcercise = require('./excercisedata');
const seedMuscleGroup = require('./muscleGroupData')
const seedRoutine = require('./routineData')

const seedAll = async () => {
    await sequelize.sync({force: true})
    await seedRoutine();
    await seedMuscleGroup();
    await seedExcercise();
    process.exit(0);
}
seedAll();