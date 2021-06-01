var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/users", function(req, res) {
    db.User.findAll({})
      .then(function(allUsers) {
        res.json(allUsers);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.User.create(req.body)
      .then(function(newUser) {
        res.json(newUser);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/terrains", (req, res) => {
    db.Terrain.findAll({})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/terrains", function(req, res) {
    db.Terrain.create(req.body)
      .then(function(newTerrain) {
        res.json(newTerrain);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/routes", function(req, res) {
    db.Route.create(req.body)
      .then(function(newRoute) {
        res.json(newRoute);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.get("/api/routes", (req, res) => {
    db.Route.findAll({})
      .then((response) => {
        res.json(response);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
