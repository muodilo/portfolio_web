const express = require('express');
const multer = require('multer');

const { createProject, getAllProjects, getCurrentThreeProjects,updateProject ,getProjectById,deleteProjectById} = require('../controllers/projectController.js');

const protect = require('../middleware/authMiddleware.js');

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

router.post('/', protect, checkAdmin, upload.single('image'), createProject);
router.get('/currentThreeProjects', getCurrentThreeProjects);
router.delete('/:id', protect, checkAdmin,deleteProjectById);
router.put('/:id', protect, checkAdmin, updateProject);
router.get('/', getAllProjects);
router.get('/:id', getProjectById);

module.exports = router;