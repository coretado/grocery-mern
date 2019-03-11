// Grabbing dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// Routes
const items = require('./routes/api/items');

// Making app
const app = express();

// Bodyparser middleware
app.use(bodyParser.json());

// DB connect
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch(error => console.log(error));

// Use Routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Running on port 5000'));