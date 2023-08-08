const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercise extends Model {}

Exercise.init(
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
    muscle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    equipment: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "None",
    },
    instruction: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "None",
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Difficulty not set.",
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'ab-workouts.jpg'
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    group_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'group',
          key: 'id',
        },
      },
    routine_id: {
    type: DataTypes.INTEGER,
    references: {
        model: 'routine',
        key: 'id',
    },
    },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercises',
    }
);

module.exports = Exercise;