const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');
require('dotenv').config();

const app = express();

const dbUri = process.env.MONGO_URI;



// Middleware
app.use(bodyParser.json({ limit: '50mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);


// MongoDB connection
mongoose.connect(dbUri, {
    
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
