const asyncHandler = require('express-async-handler')
const Post = require('../models/postModel.js');
const Subscription = require('../models/Subscription.js');
const { createTransport } = require('nodemailer');


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

    //Fetch all subscribers
    const subscribers = await Subscription.find({});

    //Send post link to each subscriber
    subscribers.forEach(async (subscriber) => {
      const subscriberEmail = subscriber.email;

      await sendPostLinkToSubscriber(subscriberEmail, post._id);
    });

    res.status(201).json('Post is created successfully');
  } catch (error) {
    res.status(500)
    throw new Error(error.message)
  }
});


const updatePost = asyncHandler(async (req, res) => {
  const postId = req.params.id; // Get the post ID from the request parameters
  const { title, content,category } = req.body;

  try {
    // Fetch the existing post from the database
    let post = await Post.findById(postId);
    if (!post) {
      res.status(404).json({ message: 'Post not found' });
      return;
    }

    // Update only the fields provided in the request body
    post.title = title || post.title;
    post.content = content || post.content;
    post.category = category || post.category;
    post.image = post.image;
    
    // Save the updated post
    post = await post.save();


    res.status(200).json({ message: 'Post updated successfully', post });
  } catch (error) {
    res.status(500).json({ message: error.message });
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

const deletePostById = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const post = await Post.findById(postId);
  if (!post) {
    res.status(404);
    throw new Error('Post not found');
  }

  await post.deleteOne();
  res.status(200).json({ message: 'Post deleted successfully' });
});


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

// Create a transporter using SMTP transport

const SMTP_KEY = process.env.SMTP_KEY;

const transporter = createTransport({
  host: "smtp-relay.sendinblue.com",
  port: 587,
  auth: {
      user: "odilomurindahabi@gmail.com",
      pass: SMTP_KEY,
  },
});

// Function to send post link to a subscriber via email
async function sendPostLinkToSubscriber(email, postId) {
  try {
    // Send email
    const info = await transporter.sendMail({
      from: 'odilomurindahabi@gmail.com',
      to: email,
      subject: 'New Post Published',
      text: `A new post has been published! Check it out: http://http://localhost:5173/blog/${postId}`,
    });

    console.log('Email sent: ', info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
}

const getPostsByCategory = async (req, res) => {
  const category = req.params.category; // Assuming category is passed as a route parameter

  try {
    // Find posts by category in the database
    const posts = await Post.find({ category: category });

    if (posts.length === 0) {
      return res.status(404).json({ message: 'No posts found in this category' });
    }

    res.status(200).json(posts);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = {
  createPost,
  getAllPosts,
  getCurrentThreePosts,
  getPostById,
  getRelatedPosts,
  deletePostById,
  updatePost,
  getPostsByCategory,
}

