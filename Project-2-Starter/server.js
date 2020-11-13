require("dotenv").config();

// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// Requiring our routes
const routes = require("./controllers");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Bringing in Morgan, a nice logger for our server
const morgan = require("morgan");

// Requiring handlebars!
const exphbs = require("express-handlebars");

// Creating express app and configuring middleware needed for authentication
const app = express();

// Set up our middleware!
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Add all our routes
app.use(routes);

let config = { force: false };
if (process.env.NODE_ENV === "test") {
  config.force = true;
}
// if we need it! {force:true}
// Syncing our database and logging a message to the user upon success
db.sequelize.sync(config).then(function() {
  if (process.env.NODE_ENV === "test") {
    db.User.create({ email: "test@test.com", password: "password" }).then(
      () => {
        console.log("Test User Created");
      }
    );
  }
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
