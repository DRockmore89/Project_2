const { Model, DataTypes } = require('sequelize');
// const { Route } = require('.');
const sequelize = require('../config/connection');
class Route extends Model {}

Route.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
        Location: {
            type: DataTypes.STRING,
            allowNull: false
    },
        Distance: {
            type: DataTypes.INTEGER,
            allowNull: false
    },
        Pace: {
            type: DataTypes.INTEGER,
            allowNull: false 
    },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
    },
        terrain_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modleName: 'Route',
    });

module.exports = Route;