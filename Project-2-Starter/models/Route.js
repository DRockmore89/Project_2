const { Model, DataTypes } = require('sequelize');
const { Route } = require('.');
const sequelize = require('../config/xxxx');
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
            allowNull: false}, 
    },
    {
        sequelize,
        modleName: 'Route',
    });

module.exports = Route;