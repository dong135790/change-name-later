// Require the modules from same directory (folder)
const Exercise = require('./Exercise');
const User = require('./User');
const MuscleGroup = require('./MuscleGroup');

MuscleGroup.hasMany(Exercise, {
    foreignKey: 'group_id',
  });
  
  Exercise.belongsTo(MuscleGroup, {
    foreignKey: 'group_id',
  });

module.exports = { Exercise, User, MuscleGroup }
