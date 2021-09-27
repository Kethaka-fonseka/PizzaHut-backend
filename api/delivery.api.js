const express = require('express');
const router = express.Router();
const controller = require('../controllers/delivery.controller');

router.post('/add',controller.addDelivery);

module.exports=router;