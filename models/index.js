// Require the modules from same directory (folder)
const Exercise = require('./Exercise');
const User = require('./User');
const Group = require('./Group');
const Routine = require('./Routine');

Group.hasMany(Exercise, {
  foreignKey: 'group_id',
});

Exercise.belongsTo(Group, {
  foreignKey: 'group_id',
});

Routine.hasMany(Exercise, {
  foreignKey: 'routine_id',
});

Exercise.belongsTo(Routine, {
  foreignKey: 'routine_id',
});


module.exports = { Exercise, User, Group, Routine }
