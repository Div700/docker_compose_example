require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define schema and model
const DataSchema = new mongoose.Schema({ name: String, age: Number, city: String });
const DataModel = mongoose.model('Data', DataSchema);

// Show data on the main page
app.get('/', async (req, res) => {
  try {
    const data = await DataModel.find();
    let html = '<h1>Stored Data</h1><ul>';
    data.forEach(item => {
      html += `<li>${item.name}, Age: ${item.age}, City: ${item.city}</li>`;
    });
    html += '</ul>';
    res.send(html);
  } catch (err) {
    res.status(500).send('Error fetching data');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
