const express = require('express');
const {subscribe}= require('../controllers/subscriptionController.js')

const router = express.Router();

router.post('/subscribe', subscribe)

module.exports = router;