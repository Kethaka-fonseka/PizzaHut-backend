const express = require('express');
const router = express.Router();
const controller = require('../controllers/delivery.controller');

//add new address
router.post('/add',controller.addDelivery);

//get all address belongs to the user profile
router.get('/addresses/:user',controller.getPermanetAddresses)

module.exports=router;