const express = require('express');
const PORT = 8080;

const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/tourDeForce';

mongoose.connect(uri);

const app = express();