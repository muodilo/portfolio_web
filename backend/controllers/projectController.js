const asyncHandler = require('express-async-handler')
const Project = require('../models/projectModel.js');


const createProject = asyncHandler(async (req, res) => {
  const { title,url,githubUrl,description } = req.body;

  if (!title || !url || !githubUrl || !description) {
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
      description,
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
      error: 'Internal server Error',
    });
  }
});

const deleteProjectById = asyncHandler(async (req, res) => {
  const projectId = req.params.id;

  // Find the project by ID in the database
  const project = await Project.findById(projectId);

  // If project not found, return 404
  if (!project) {
    res.status(404).json({ message: 'Project not found' });
    return;
  }

  // Delete the project
  await project.deleteOne();

  // Respond with success message
  res.status(200).json({ message: 'Project deleted successfully' });
});


const updateProject = asyncHandler(async (req, res) => {
  const projectId = req.params.id; // Get the project ID from the request parameters
  const { title, url, githubUrl,description } = req.body;

  try {
    // Fetch the existing project from the database
    let project = await Project.findById(projectId);
    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }

    // Update only the fields provided in the request body
    project.title = title || project.title;
    project.url = url || project.url;
    project.description = description || project.description;
    project.githubUrl = githubUrl || project.githubUrl;
    project.image = project.image; // Assuming image is not updated in this function
    
    // Save the updated project
    project = await project.save();

    res.status(200).json({ message: 'Project updated successfully', project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const getProjectById = asyncHandler(async (req, res) => {
  const projectId = req.params.id; // Get the project ID from the request parameters

  try {
    // Find the project by ID in the database
    const project = await Project.findById(projectId);

    if (!project) {
      res.status(404).json({ message: 'Project not found' });
      return;
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});




module.exports = {
  createProject,
  getAllProjects,
  getCurrentThreeProjects,
  deleteProjectById,
  updateProject,
  getProjectById,
}

