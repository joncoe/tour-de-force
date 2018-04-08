const config = require('config');
const express = require('express');
const Event = require('./models/event');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes');

const path = require('path');
// const PORT = config.port || 8080;
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI || config.MONGODB_URI;

mongoose.connect(MONGODB_URI).then(() => {
  console.log(`Successfully connected to ${uri}`);
});

// const PORT = 8080;

// const uri = 'mongodb://localhost:27017/tourDeForce';

// mongoose.connect(uri).then(() => {
//   console.log(`Successfully connected to ${uri}`);
// });

const app = express();

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
