const express = require('express');
const router = express.Router();
const controller = require('../controllers/cart.controller');

// Add product to cart
router.post('/add', controller.addToCart);

// Update cart qty
router.patch('/update/:id', controller.updateProductQty);

// Delete product from cart
router.delete('/delete/:id', controller.removeFromCart);

//Delete all from cart
router.delete('/delete/all/:user',controller.deleteAllFromCarts);

// Get all cart items
router.get('/:user', controller.getAllFromCart);

//Get cart item by id
router.get('/:id/:size',controller.getCartItemByID)

//Get cart total
router.get('/total',controller.getTotalPrice)
module.exports = router;
