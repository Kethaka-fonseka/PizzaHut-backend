const express = require('express');
const router = express.Router();
const controller = require('../controllers/order.controller');

// Add  new order
router.post('/add', controller.addOrder);


// update the order status
router.patch('/edit_status/:id', controller.editOrderStatus)

// assign employee to the order
router.patch('/assign/:id', controller.assignToOrder)

// get all orders
router.get('/', controller.getAllOrders);

// filter by status
router.get('/:status', controller.filterOrderByStatus);

module.exports = router;
