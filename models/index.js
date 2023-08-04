// Require the modules from same directory (folder)
const Exercise = require('./Exercise');
const User = require('./User');
const Routine = require('./Routine');

Routine.hasMany(Exercise, {
    foreignKey: 'routine_id',
  });
  
  Exercise.belongsTo(Routine, {
    foreignKey: 'routine_id',
  });

module.exports = { Exercise, User, Routine }
