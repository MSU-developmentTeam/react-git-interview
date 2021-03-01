const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const config = require('config');
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const methodOverride = require("method-override");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

const path = require("path");

const db = config.get("mongoURI");

mongoose.connect(process.env.MONGODB_URI || db );

// logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Serve up static assets for HEROKU
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;


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


app.use('/api/users', require('./routes/Authentication/user-routes'))
app.use('/api/questions', require('./routes/questions-api-routes')) 
app.use('/api/auth', require('./routes/Authentication/auth-routes'))

// Syncing our database and logging a message to the user upon success
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} `
  );
});
