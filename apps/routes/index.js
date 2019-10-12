var express = require('express');
var router = express.Router();

// router app
router.use("/", require('./home'));
router.use("/service", require('./service'));
router.use("/gallery", require('./gallery'));
router.use("/promotion", require('./promotion'));
router.use("/sanitation", require('./sanitation'));
router.use("/contact", require('./contact'));

module.exports = router;