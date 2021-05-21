const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/xxxx');
class User extends Model {}

User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
    },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modleName: 'User',
    });

module.exports = User;