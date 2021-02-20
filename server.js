const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const methodOverride = require("method-override");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

import path from "path";

// dotenv.config({path: './config/config.env'})
const db = config.get("mongoURI");

// logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
// require("./routes/passport-html-routes.js")(app);
// require("./routes/passport-api-routes.js")(app);
// require("./routes/html-routes.js")(app);

require("./routes/questions-api-routes")(app);
require("./routes/Authentication/auth-routes")(app);

// Syncing our database and logging a message to the user upon success
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} node on port ${PORT} `
  );
});
