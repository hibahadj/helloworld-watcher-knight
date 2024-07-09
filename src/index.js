const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const candidateRoutes = require('./routes/candidate');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/candidates', candidateRoutes);

app.use(express.static('src/public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
