const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require('dotenv');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

dotenv.config({ path: './config/.env' });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactGitInterviewDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use('/api/users', require('./routes/Authentication/user-routes'))
app.use('/api/questions', require('./routes/questions-api-routes')) 
app.use('/api/auth', require('./routes/Authentication/auth-routes'))

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3001;

// Syncing our database and logging a message to the user upon success
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT} `
  );
});
