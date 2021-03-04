const bcrypt = require('bcryptjs');
const _ = require('lodash');
const {User} = require('../../models/user')
const express = require("express");
const router = express.Router();

// @route POST api/users
// @desc Register an user
// @access Public
router.post("/", async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).send('User already registered');

  user = new User(_.pick(req.body, ['username', 'email', 'password']));
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  const token = user.generateAuthToken();
  res.header('x-auth-token', token).send(_.pick(user, ['-id', 'username', 'email']));
});
module.exports = router;
