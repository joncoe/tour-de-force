const express = require('express');
const Router = express.Router;
const router = Router();

router.use('/event', require('./event'));
router.use('/user', require('./user'));

module.exports = router;
