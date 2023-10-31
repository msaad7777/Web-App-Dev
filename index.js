const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
    res.json({ message: "Welcome to Marketplace App" });
});

const dbURI = 'mongodb://127.0.0.1:27017/Marketplace';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Error connecting to MongoDB:', error));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
