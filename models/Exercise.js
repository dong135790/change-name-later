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
    group: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Upper Body"
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
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Difficulty not set."
    },
    image: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'exercise',
    }
)