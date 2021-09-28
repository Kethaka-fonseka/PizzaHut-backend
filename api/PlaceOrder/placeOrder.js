const express = require('express');
const PlaceOrder = require('../../controllers/PlaceOrder/PlaceOrder.controller');
var router = express.Router();

router.post('/add', PlaceOrder.placeOrder);


module.exports = router;