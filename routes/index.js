/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();

router.get('/', (req, res)=>{
    res.render("../views/home");
});
router.get('/contact', (req, res)=>{
    res.render("../views/contact_us");
});

router.get('/aboutus', (req, res)=>{
    res.render("../views/about_us");
});


module.exports = router;