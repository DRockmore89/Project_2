const { Model } = require('sequelize');

const { Terrain } = require('../models');

const routeData = [{
    Treadmill: false,
    Sand: true,
    Snow: false,
    Road: false,
    Mountain_Trail: false,
    user_id: 1
},
{
    Treadmill: false,
    Sand: false,
    Snow: false,
    Road: true,
    Mountain_Trail: false,
    user_id: 2

},
{
    Treadmill: false,
    Sand: false,
    Snow: false,
    Road: true,
    Mountain_Trail: false,
    user_id: 3
}
];

const seedTerrains = () => Route.bulkCreate(Terrain.data);

module.exports = seedTerrains;