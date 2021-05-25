/*"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;*/

//Import Moduels
const User = require("./User");
const Route = require("./Route");
const Terrain = require("./Terrain");

//User belongs to route
User.hasMany(Route, {
  foreignKey: "user_id",
});

//route belongs to many users
Route.belongsTo(User, {
  foreignKey: "user_id",
});

//route belongs to many terrains
Route.hasMany(Terrain, {
  foreignKey: "route_id",
});

Terrain.belongsTo(Route, {
  foreignKey: "terrain_id"
});

module.exports = {
  User,
  Route,
  Terrain,
};
