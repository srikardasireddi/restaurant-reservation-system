const express = require('express');
const connectDB = require('./config/db'); // We will create this next
const cors = require('cors');
require('dotenv').config();

const app = express();

// Init Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
// app.use('/api/reservations', require('./routes/reservations')); // We'll build this next

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));