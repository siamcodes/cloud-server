const express = require('express');
const router = express.Router();

router.get('/' , (req, res, next) => {
    res.render('home.ejs');
} );

router.get('/about', (req, res, next) => {
    res.render('about.ejs');
});

router.get('/contact', (req, res, next) => {
    res.render('contact.ejs');
});


module.exports = router;