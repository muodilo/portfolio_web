const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel.js');


const createPost = asyncHandler(async (req, res) => {
  const { title, content, image, category } = req.body;

  if (!title || !content || !image || !category) {
    res.status(401);
    throw new Error('Please provide all fields');
  }

  try {
    //create post in database
    const post = await Post.create({
      title,
      content,
      image,
      category,
    })

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({
      error: 'Internal Server Error',
    })
  }
})

module.exports = {
  createPost,
}

