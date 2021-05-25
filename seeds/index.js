const seedUsers = require('./user-seeds.js');
const seedTerrains = require('./terrain-seeds.js');
const seedRoutes = require('./route-seeds.js');

const sequelize = requre('../config/connection');

const seedAll = async() => {
    await sequelize.sync({force: true});
    await seedUsers();
    await seedTerrains();
    await seedRoutes();
    process.exit(0);
};

seedAll();
