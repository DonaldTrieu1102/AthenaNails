var express = require('express');
var router = express.Router();
var promotion = require('../model/promotion');
router.get('/', (req, res) => {
    var pr = promotion.getPromotion();
    pr.then(p => {
        console.log(p);
        res.render('client/promotion', {
            layout: 'layouts/main',
            promotion : p
        });
    }).catch(err => {
        console.log(err);
    })
});
router.get('/ads', (req, res) => {
    var pr = promotion.getPromotion();
    pr.then(p => {
        console.log(p);
        res.json(p[0]);
    }).catch(err => {
        console.log(err);
    })
});
module.exports = router;