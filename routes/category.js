const express = require('express');
const router = express.Router();

//เรียกมาจาก controllers
const { create, list, remove, read } = require("../controllers/category.js");

router.post('/category/create', create);
router.get('/categories', list);
router.delete('/category/:slug', remove);
router.get('/category/:slug', read);

module.exports = router;
