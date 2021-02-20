const express = require("express");
const router = express.Router();
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");
// @route POST api/users
// @desc Register an user
// @access Public
router.post("/", (req, res) => {
  const { username, email, password } = req.body;
  // Simple Validation
  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  // Check for existing user
  User.findOne({ username, email }).then((user) => {
    if (user) return res.status(400).json({ msg: "User already exists" });
    const newUser = new User({
      username,
      email,
      password,
    });
    // Create Salt and Hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hast(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then((user) => {
          // Signing the token
          jwt.sign(
            // payload
            { id: user.id },
            //jwt secret
            config.get("jwtSecret"),
            // Expires in two hours
            { expiresIn: 7200 },
            (err, token) => {
              if (err) throw err;
              res.json({
                token,
                user: {
                  id: user.id,
                  username: user.username,
                  email: user.email,
                },
              });
            }
          );
        });
      });
    });
  });
});
module.exports = router;
