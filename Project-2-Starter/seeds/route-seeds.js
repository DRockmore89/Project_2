const { Model } = require('sequelize');

const { Route } = require('../models');

const routeData = [{
    Location: 'Orlando',
    Distance: 15,
    Pace: 7,
    user_id: 1
},
{
    Location: 'Las Vegas',
    Distance: 8,
    Pace: 12,
    user_id: 2

},
{
    Location: 'New York',
    Distance: 10,
    Pace: 15,
    user_id: 3
}
];

const seedRoutes = () => Route.bulkCreate(route.data);

module.exports = seedRoutes;