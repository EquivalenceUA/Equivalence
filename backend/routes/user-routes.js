const express = require('express');
const {createUser} = require('../controllers/user.controller');
const {logInUser} = require('../controllers/log-in.controller')

const router = express.Router();

router.post("/sign-up", createUser)
router.post("/log-in", logInUser)

module.exports = router;