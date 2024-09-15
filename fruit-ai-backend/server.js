const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const faqRoutes = require('./routes/faqs');
const authRoutes = require('./routes/auth'); // Assuming you have auth routes

require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use('/api/faqs', faqRoutes);
app.use('/api/auth', authRoutes); // Assuming you have auth routes

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
