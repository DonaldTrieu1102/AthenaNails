var express = require('express');
var router = express.Router();
router.get('/', (req, res) => {

    res.render('client/service', {
        layout: 'layouts/main'    });

});
module.exports = router;