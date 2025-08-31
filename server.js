require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const processRoutes = require('./routes/process');

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/process', processRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
