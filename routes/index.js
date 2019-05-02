/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();

app.set('views', path.join(__dirname, 'views'));

router.get('/', (req, res)=>{
    res.render("home");
});

module.exports = router;