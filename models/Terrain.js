const { Model, DataTypes } = require('sequelize');
// const { Terrain } = require('.');
const sequelize = require('../config/connection');
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
            type: DataTypes.BOOLEAN,
            allowNull: false
    },
        Sand: {
            type: DataTypes.BOOLEAN,
            allowNull: false
    },
        Snow: {
            type: DataTypes.BOOLEAN,
            allowNull: false
    },
        Road: {
            type: DataTypes.BOOLEAN,
            allowNull: false
    },
        Mountain_Trail: {
            type: DataTypes.BOOLEAN,
            allowNull: false
    },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
                // references: {
                //     model: 'user',
                //     key: 'id'
                // }
        }
        
    },
    {
        sequelize,
        modelName: 'Terrain',
    });

module.exports = Terrain;