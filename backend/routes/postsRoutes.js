const express = require('express');
const { createPost,getAllPosts,getCurrentThreePosts,getPostById } = require('../controllers/postController.js');

const router = express.Router();

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/currentThreePosts', getCurrentThreePosts);
router.get('/:id', getPostById);

module.exports = router;