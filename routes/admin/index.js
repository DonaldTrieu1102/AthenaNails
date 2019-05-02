/**
 * Module dependencies.
 */
var express = require('express');
var router = express.Router();

app.set('views', path.join(__dirname, 'views'));
router.get('/admin', (req, res)=>{
    res.render("/admin/admin");
});

module.exports = router;