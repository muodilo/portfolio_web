const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true,
  },
  content: {
    type: String,
    required:true,
  },
  image: {
    type:String,
  },
  category: {
    type: String,
    enum:[Business,Software_development, Tutorials,Technology]
  }
}, {
  timestamps:true,
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;