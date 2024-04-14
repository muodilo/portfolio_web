const asyncHandler = require('express-async-handler')
const Project = require('../models/projectModel.js');


const createProject = asyncHandler(async (req, res) => {
  const { title,url,githubUrl } = req.body;

  if (!title || !url || !githubUrl) {
    res.status(401);
    throw new Error('Please provide all fields');
  }

  try {

    let imageUrl = null;

    // Check if an image was uploaded
    if (req.file) {
      // Construct the image URL based on the server's environment
      const serverBaseUrl = process.env.SERVER_BASE_URL || 'http://localhost:5000';
      imageUrl = `${serverBaseUrl}/uploads/${req.file.filename}`;
    }

    //create post in database
    const project = await Project.create({
      title,
      url,
      githubUrl,
      image:imageUrl,
    })

    res.status(201).json('Project is created successfully');
  } catch (error) {
    res.status(500)
    throw new Error(error.message)
  }
});

const getAllProjects = asyncHandler(async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    if (!projects) {
      res.status(400);
      throw new Error('There is no project yet available');
    } else {
      res.status(200).json(projects);
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'Internal server error',
    })
  }
});

const getCurrentThreeProjects = asyncHandler(async (req, res) => {
  try {
    // Query the database to retrieve the three most recent posts
    const projects = await Project.find().sort({ createdAt: -1 }).limit(3);

    if (!projects || projects.length === 0) {
      res.status(404).json({ error: 'There are no projects available' });
    } else {
      res.status(200).json(projects);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
});

// const getPostById = asyncHandler(async (req, res) => {
//   const postId = req.params.id;
//   const post = await Post.findById(postId);
//   if (!post) {
//     res.status(404)
//     throw new Error('post not found');
//   }

//   res.status(200).json(post);
// })


// const getRelatedPosts = asyncHandler(async (req, res) => {
//   const category = req.params.category;

//   try {
//     const posts = await Post.find({ category: category }).sort({ createdAt: -1 }).limit(3);

//     if (!posts || posts.length === 0) {
//       res.status(404).json({ error: 'No posts found for the specified category' });
//       throw new Error('No posts found for the specific category');
//     }

//     res.status(200).json(posts);
//   } catch (error) {
//     console.error(error); 
//     res.status(500);
//     throw new Error('Internal Server Error')
//   }
// })

module.exports = {
  createProject,
  getAllProjects,
  getCurrentThreeProjects
}

