const express = require('express');
const router = express.Router();
const controller = require('../controllers/cart.controller');

// Add product to cart
router.post('/add', controller.addToCart);

// Update cart qty
router.patch('/update/:id', controller.updateProductQty);

// Delete product from cart
router.delete('/delete/:id', controller.removeFromCart);

// Get all cart items
router.get('/', controller.getAllFromCart);

//Get cart item by id
router.get('/:id',controller.getCartItemByID)

//Get cart total
router.get('/total',controller.getTotalPrice)
module.exports = router;