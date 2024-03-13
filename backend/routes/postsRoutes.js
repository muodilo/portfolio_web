const express = require('express');
const { createPost, getAllPosts, getCurrentThreePosts, getPostById, getRelatedPosts } = require('../controllers/postController.js');

const  protect  = require('../middleware/authMiddleware.js');
const  checkAdmin  = require('../middleware/checkAdminMiddleware.js');

const router = express.Router();

router.post('/', protect,checkAdmin,createPost);
router.get('/', getAllPosts);
router.get('/currentThreePosts', getCurrentThreePosts);
router.get('/:id', getPostById);
router.get('/related/:category', getRelatedPosts);

module.exports = router;