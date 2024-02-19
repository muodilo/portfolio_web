const express = require('express');
const { createPost,getAllPosts,getCurrentThreePosts } = require('../controllers/postController.js');

const router = express.Router();

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/currentThreePosts', getCurrentThreePosts);

module.exports = router;