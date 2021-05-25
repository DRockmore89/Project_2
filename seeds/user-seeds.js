const { Model } = require('sequelize');

const { User } = require('../models');

const routeData = [{
    username: 'Jake',
    password: "Jake21"
},
{
    username: 'Ashley',
    password: "24Ashley"

},
{
    username: 'Jordan',
    password: "Jordan20"
}
];

const seedUsers = () => User.bulkCreate(route.data);

module.exports = seedUsers;