const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MuscleGroup extends Model {}

MuscleGroup.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    group_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'exercise',
            key: 'id',
        },
    },
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'muscleGroup',
}
);

module.exports = MuscleGroup;