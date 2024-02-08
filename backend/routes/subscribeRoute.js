const express = require('express');
const {subscribe}= require('../controllers/subscriptionController.js')

const router = express.router();

router.post('/subscribe', subscribe)

module.exports = router;