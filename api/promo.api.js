const express = require('express');
const Promotion = require('../controllers/promo.controller');
var router = express.Router();


router.post('/add-promo',Promotion.addPromo);
router.put('/update-promo/:id',Promotion.UpdatePromo);
router.get('/display-promo',Promotion.PromoDisplay);
router.get('/get-promo/:id',Promotion.getPromoById);
router.delete('/delete-promo/:id',Promotion.DeletePromo);




module.exports = router;