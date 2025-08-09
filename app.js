const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const serviceRoutes = require('./routes/serviceRoutes');
const benefitRoutes = require('./routes/benefitRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');

const app = express();
const PORT = process.env.PORT || 8002;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/services', serviceRoutes);
app.use('/api/benefits', benefitRoutes);
app.use('/api/testimonials', testimonialRoutes);

app.get('/', (req, res) => res.send('API is running...'));

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
module.exports = app;