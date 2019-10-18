var express = require('express');
var router = express.Router();
var data = require('../model/gallery');
router.get('/', (req, res) => {
    var g = data.findAll();
    g.then(rows => {
        console.log(rows);
        res.render('client/gallery', {
            layout: 'layouts/main',
            gallery: rows
        });
    }).catch(err =>{
        console.log(err)
    })


});
module.exports = router;