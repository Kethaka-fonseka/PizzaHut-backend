const express = require('express');
const router = express.Router();
const controller = require('../controllers/delivery.controller');

//add new address
router.post('/add',controller.addDelivery);

//get all address belongs to the user profile
router.get('/addresses/:user',controller.getPermanetAddresses)


//update delivery address
router.patch('/update/:id',controller.updateDelivery);

//remove delivery address
router.delete('/delete/:id',controller.removeAddress);

module.exports=router;