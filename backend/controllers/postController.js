const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel.js');


const createPost = asyncHandler(async (req, res) => {
  const { title, content,category } = req.body;

  if (!title || !content || !category) {
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
    const post = await Post.create({
      title,
      content,
      image:imageUrl,
      category,
    })

    res.status(201).json('Post is created successfully');
  } catch (error) {
    res.status(500)
    throw new Error(error.message)
  }
});

const getAllPosts = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    if (!posts) {
      res.status(400);
      throw new Error('There is no post yet available');
    } else {
      res.status(200).json(posts);
    }

  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'Internal server error',
    })
  }
});

const getCurrentThreePosts = asyncHandler(async (req, res) => {
  try {
    // Query the database to retrieve the three most recent posts
    const posts = await Post.find().sort({ createdAt: -1 }).limit(3);

    if (!posts || posts.length === 0) {
      res.status(404).json({ error: 'There are no posts available' });
    } else {
      res.status(200).json(posts);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: 'Internal server error',
    });
  }
});

const getPostById = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  if (!post) {
    res.status(404)
    throw new Error('post not found');
  }

  res.status(200).json(post);
})


const getRelatedPosts = asyncHandler(async (req, res) => {
  const category = req.params.category;

  try {
    const posts = await Post.find({ category: category }).sort({ createdAt: -1 }).limit(3);

    if (!posts || posts.length === 0) {
      res.status(404).json({ error: 'No posts found for the specified category' });
      throw new Error('No posts found for the specific category');
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error(error); 
    res.status(500);
    throw new Error('Internal Server Error')
  }
})

module.exports = {
  createPost,
  getAllPosts,
  getCurrentThreePosts,
  getPostById,
  getRelatedPosts,
}

