import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { getProjectById } from '../../features/projects/projectSlice';
import { useSelector, useDispatch } from 'react-redux';
import { FloatingLabel } from 'flowbite-react';
import { toast } from 'react-toastify';
import { logout } from '../../features/auth/authSlice';
import { Textarea } from 'flowbite-react';

const UpdateProject = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.reducer.auth);
  const { specificProject } = useSelector(state => state.reducer.project);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user.role !== 'admin') {
      navigate('/login');
    }
  }, [user, navigate]);

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: specificProject ? specificProject.title : '',
    url: specificProject ? specificProject.url : '',
    description: specificProject ? specificProject.description : '',
    githubUrl: specificProject ? specificProject.githubUrl : '',
  });

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      }
      const projectId = specificProject._id;

      const updatedProject = await axios.put(`http://localhost:5000/api/v1/projects/${projectId}`, formData,config);

      toast.success('Project updated successfully');

      dispatch(getProjectById(projectId));
      navigate(`/project/${specificProject._id}`);
    } catch (error) {
      toast.error('Error updating project:', error.message);
      console.error('Error updating project:', error.message);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section className="px-0 md:px-[60px] lg:px-[100px] md:mb-10">
      <div className="pt-[70px] px-5 md:px-52">
        <h1 className="text-lg mt-5">Update Project</h1>
        <hr className="mb-6" />
        <form onSubmit={handleSubmit}>
          <FloatingLabel
            className="mb-5"
            variant="standard"
            label="Title"
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          <FloatingLabel
            className="mb-5"
            variant="standard"
            label="URL"
            id="url"
            name="url"
            type="text"
            value={formData.url}
            onChange={handleInputChange}
            required
          />
          <FloatingLabel
            className="mb-5"
            variant="standard"
            label="Github URL"
            id="githubUrl"
            name="githubUrl"
            type="text"
            value={formData.githubUrl}
            onChange={handleInputChange}
            required
          />
          <div className="mb-5">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Description..."
              required
              rows={7}
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mb-5">
            Update Project
          </button>
        </form>
        <button className="btn btn-default" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </section>
  );
};

export default UpdateProject;

