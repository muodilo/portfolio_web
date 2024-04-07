const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true,
  },
  url: {
    type: String,
    required:true,
  },
  githubUrl: {
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
}, {
  timestamps:true,
})

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;