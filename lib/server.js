const express = require('express');
const Event = require('./models/event');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes');

const PORT = 8080;

const uri = 'mongodb://localhost:27017/tourDeForce';

mongoose.connect(uri).then(() => {
  console.log(`Successfully connected to ${uri}`);
});

const app = express();

app.use(bodyParser.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
