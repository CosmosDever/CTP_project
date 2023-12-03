const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ctp_database');

const dbmongo = mongoose.connection;

dbmongo.on('error', console.error.bind(console, 'MongoDB connection error:'));
dbmongo.once('open', () => {
    console.log('Connected to MongoDB');
});

app.get('/customer', async (req, res) => {
    try {
        const customersCursor = await dbmongo.collection('customer').find();
        const customers = await customersCursor.toArray();
        res.json(customers);
    } catch (error) {

        console.error('Error fetching customers:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(3002, () => {
    console.log('Server started on port 3002');
});