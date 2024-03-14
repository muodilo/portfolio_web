const express = require('express');
const multer = require('multer');

const { createPost, getAllPosts, getCurrentThreePosts, getPostById, getRelatedPosts } = require('../controllers/postController.js');

const  protect  = require('../middleware/authMiddleware.js');
const  checkAdmin  = require('../middleware/checkAdminMiddleware.js');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/', protect,checkAdmin,upload.single('image'),createPost);
router.get('/', getAllPosts);
router.get('/currentThreePosts', getCurrentThreePosts);
router.get('/:id', getPostById);
router.get('/related/:category', getRelatedPosts);

module.exports = router;