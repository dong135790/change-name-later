const sequelize = require('../config/connection');
const seedExcercise = require('./excercisedata');
const seedMuscleGroup = require('./muscleGroupData')
const seedRoutine = require('./routineData')
const seedUser = require('./userData')

const seedAll = async () => {
    await sequelize.sync({force: true})
    await seedRoutine();
    await seedMuscleGroup();
    await seedExcercise();
    await seedUser();
    process.exit(0);
}
seedAll();