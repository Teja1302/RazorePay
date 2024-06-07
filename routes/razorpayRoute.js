const express = require('express');
const router = express.Router();
const { createLinkAccount, createOrder } = require('../controllers/razorpayController');

router.post('/create-link-account', createLinkAccount);
router.post('/create-order', createOrder);



router.get('/test', (req, res) => {
    res.send('Test route is working');
});


module.exports = router;
