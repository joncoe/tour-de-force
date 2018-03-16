const express = require('express');
const PORT = 8080;

const mongoose = require('mongoose');

const uri = 'mongodb://localhost/tourDeForce';

mongoose.connect(uri);

const app = express();