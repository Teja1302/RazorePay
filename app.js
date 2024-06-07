require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const razorpayRoutes = require('./routes/razorpayRoute');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/api', razorpayRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
