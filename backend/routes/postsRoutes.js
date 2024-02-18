const express = require('express');
const { createPost } = require('../controllers/postController.js');

const router = express.Router();

router.post('/', createPost)

module.exports = router;