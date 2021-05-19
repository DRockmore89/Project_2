const { Model, DataTypes } = require('sequelize');
const { Terrain } = require('.');
const sequelize = require('../config/xxxx');
class Terrain extends Model {}

Terrain.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
        Treadmill: {
            type: DataTypes.boolean,
            allowNull: false
    },
        Sand: {
            type: DataTypes.boolean,
            allowNull: false
    },
        Snow: {
            type: DataTypes.boolean,
            allowNull: false
    },
        Road: {
            type: DataTypes.boolean,
            allowNull: false
    },
        Mountain_Trail: {
            type: DataTypes.boolean,
            allowNull: false
        }
        
    },
    {
        sequelize,
        modleName: 'Terrain',
    });

module.exports = Terrain;