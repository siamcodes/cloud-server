const express = require('express');
const router = express.Router();

//เรียกมาจาก controllers
const { signup, users, profile } = require("../controllers/user.js");

router.post('/signup', signup);
router.get('/users', users);
router.get('/profile', profile);


module.exports = router;

