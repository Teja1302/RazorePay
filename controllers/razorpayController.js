const axios = require('axios');
const LinkAccount = require('../models/linkAccountModels');
const Order = require('../models/orderModel');
const createLinkAccount = async (req, res) => {
    const data = new LinkAccount(
        req.body.email,
        req.body.phone,
        req.body.type,
        req.body.reference_id,
        req.body.legal_business_name,
        req.body.business_type,
        req.body.contact_name,
        req.body.profile,
        req.body.legal_info
    );

    if (!LinkAccount.validate(data)) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    try {
        const response = await axios.post('https://api.razorpay.com/v2/accounts', data, {
            auth: {
                username: process.env.RAZORPAY_KEY_ID,
                password: process.env.RAZORPAY_SECRET_KEY
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error creating link account:', error.response ? error.response.data : error.message);
        res.status(500).json({
            error: 'Failed to create link account',
            details: error.response ? error.response.data : error.message
        });
    }
};
//---------create order

const createOrder = async (req, res) => {
    const data = new Order(
        req.body.amount,
        req.body.payment_capture,
        req.body.currency,
        req.body.transfers
    );

    if (!Order.validate(data)) {
        return res.status(400).json({ error: 'Invalid data' });
    }

    try {
        const response = await axios.post('https://api.razorpay.com/v1/orders', data, {
            auth: {
                username: process.env.RAZORPAY_KEY_ID,
                password: process.env.RAZORPAY_SECRET_KEY
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error creating order:', error.response ? error.response.data : error.message);
        res.status(500).json({
            error: 'Failed to create order',
            details: error.response ? error.response.data : error.message
        });
    }
};

module.exports = { createLinkAccount,createOrder };
