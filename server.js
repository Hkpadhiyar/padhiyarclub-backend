// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('❌ MongoDB Error:', err));

// Sample route
app.get('/', (req, res) => {
    res.send('Backend is running...');
});

// Start server
const PORT = config.port || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
