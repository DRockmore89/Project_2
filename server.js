require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
// const sequelize = require("./config/connection"); 
const sequelize = require("./config/connection");

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
   console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
 });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
}).catch( err => {
  console.log(err);
});
// <<<<<<< HEAD
//   app.listen(PORT, () => console.log('Now listening'));
// }).catch( err => {
//   console.log(err);
// });

// >>>>>>> 3b19936353416e5464a5018603bf7321f3ca67d0




  app.listen(PORT, () => console.log("Now listening"));

//
// >>>>>>> 5092aae4a2a88b2005c505c3c5c4584bc1d2d8a7
// db.sequelize.sync(syncOptions).then(function() {
//   app.listen(PORT, function() {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });
