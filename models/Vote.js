// import constructors
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Vote model
class Vote extends Model {}

// define table columns and configuration
Vote.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // What needs to go here? Both foreign keys have allowNull so that the pairings of post_id and user_id are unique
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'vote'
    }
);

module.exports = Vote;