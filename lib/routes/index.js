const express = require('express');
const Router = express.Router;
const router = Router();

router.use('/event', require('./event'));

module.exports = router;
