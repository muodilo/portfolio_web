const express = require('express');
const multer = require('multer');

const { createProject, getAllProjects, getCurrentThreeProjects } = require('../controllers/projectController.js');

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

router.post('/', protect,checkAdmin,upload.single('image'),createProject);
router.get('/', getAllProjects);
router.get('/currentThreeProjects', getCurrentThreeProjects);

module.exports = router;