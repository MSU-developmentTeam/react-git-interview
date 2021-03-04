const express = require("express");
const router = express.Router();
//const config = require('config');
// const jwt = require("jsonwebtoken");
const {User} = require("../../models/user");
// const auth = require("../../config/middleware/auth");
const bcrypt = require('bcryptjs');
// const config = require('config');

// @route POST api/auth
// @desc POST login User
// @access Public
router.post("/", async (req, res) => {
	let user = await User.findOne({ username: req.body.username });
	if(!user) return res.status(400).send('Invalid email or password')
	
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send('Invalid email or password');

	const token = user.generateAuthToken();
	res.send(token)
});

module.exports = router;
