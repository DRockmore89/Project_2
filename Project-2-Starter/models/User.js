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
        User_First_Name: {
            type: DataTypes.STRING,
            allowNull: false
    },
        User_Last_Name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modleName: 'User',
    });

module.exports = User;