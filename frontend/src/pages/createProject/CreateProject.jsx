import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FloatingLabel } from 'flowbite-react';
import { toast } from 'react-toastify';
import { createProject,reset } from '../../features/projects/projectSlice';
import {logout} from '../../features/auth/authSlice'
import { useSelector, useDispatch } from 'react-redux';
import { FileInput, Label } from 'flowbite-react';
import axios from 'axios';
import {  Textarea } from "flowbite-react";

const CreateProject = () => {

  const navigate = useNavigate()
  const { user } = useSelector(state => state.reducer.auth);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user.role !== 'admin') {
      navigate('/login');
    }
  }, [user])
  
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description:'',
    githubUrl: '',
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const formDataWithImage = new FormData();
      formDataWithImage.append('title', formData.title);
      formDataWithImage.append('url', formData.url);
      formDataWithImage.append('githubUrl', formData.githubUrl);
      formDataWithImage.append('description', formData.description);
      formDataWithImage.append('image', formData.image);

      console.log(formDataWithImage);

      
          // Dispatch createPost action and wait for its completion
      const action = await dispatch(createProject(formDataWithImage));
    // Check if the action is fulfilled (successfully dispatched)
    if (createProject.fulfilled.match(action)) {
      // If fulfilled, show success toast
      toast.success('Project created');
      navigate('/projects');
      dispatch(reset());
    } else {
      // If not fulfilled, handle error (e.g., show an error message to the user)
      toast.error('Error creating project:', action.error.message);
      console.error('Error creating project:', action.error);
      dispatch(reset());
    }
      // You can redirect to another page or update the UI as needed after successful post creation.
    } catch (error) {
      toast.error('Error creating project:', error.message);
      console.error('Error creating project:', error.message);
      dispatch(reset());
      // Handle error (e.g., show an error message to the user)
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <section className=' px-0 md:px-[60px] lg:px-[100px] md:mb-10'>
      <div className='pt-[70px] px-5 md:px-52'>
        <h1 className='text-lg mt-5'>Create New Project</h1>
        <hr className='mb-6'/>
        <form onSubmit={handleSubmit} >
          <FloatingLabel
            className='mb-5'
            variant="standard"
            label="Title"
            id='title'
            name='title'
            type='text'
            value={formData.title}
            onChange={handleInputChange}
            required 

          />


            <div className='mb-5'>
              <Label htmlFor="description" value="Description" />
              <Textarea id='description' name='description' placeholder="Description..." required rows={7} value={formData.description}  onChange={handleInputChange} />
            </div>

            <FloatingLabel
            className='mb-5'
            variant="standard"
            label="Url"
            id='url'
            name='url'
            type='text'
            value={formData.url}
            onChange={handleInputChange}
            required 

          />

            <FloatingLabel
            className='mb-5'
            variant="standard"
            label="GithubUrl"
            id='githubUrl'
            name='githubUrl'
            type='text'
            value={formData.githubUrl}
            onChange={handleInputChange}
            required 

          />

          <FloatingLabel
            className='mb-5'
            variant="standard"
            label="Image"
            id='image'
            name='image'
            type='file'
            accept="image/*"
            onChange={handleImageChange}
            required 

          />

          <button type="submit" className="btn btn-primary mb-5">Post Project</button>
        </form>
        <button className='btn btn-default ' onClick={handleLogout}>Logout</button>

      </div>

    </section>
  )
}

export default CreateProject
