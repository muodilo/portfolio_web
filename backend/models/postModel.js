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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    enum:['Business','Software development', 'Tutorials','Technology']
  }
}, {
  timestamps:true,
})

const Post = mongoose.model("Post", postSchema);

module.exports = Post;