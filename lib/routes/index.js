const express = require('express');
const Router = express.Router;
const router = Router();

router.use('/event', require('./event'));
router.use('/user', require('./user'));
router.use('/auth', require('./auth'));

module.exports = router;
