const express = require('express');
const Report = require('../../controllers/Report/Report.controller');

var router = express.Router();

router.get('/summary', Report.AllReports);

module.exports = router;