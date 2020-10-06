const { Router } = require("express");
const router = Router();
const { index, products, checkout } = require('../controllers/buy.controller');


router.get('/', index);

router.get('/products', products);

router.post('/checkout', checkout);

module.exports = router;