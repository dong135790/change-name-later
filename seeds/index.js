const sequelize = require('../config/connection');
const seedExcercise = require('./excercisedata');

const seedAll = async () => {
    await sequelize.sync({force: true})
    // await seedExcercise();
    process.exit(0);
}
seedAll();