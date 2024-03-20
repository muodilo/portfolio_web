import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FloatingLabel } from 'flowbite-react';
import { toast } from 'react-toastify';
import { createPost, reset } from '../../features/post/postSlice';
import {logout} from '../../features/auth/authSlice'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector, useDispatch } from 'react-redux';
import { FileInput, Label } from 'flowbite-react';

const CreatePost = () => {

  const navigate = useNavigate()
  const { user } = useSelector(state => state.reducer.auth);
  const {posts}= useSelector(state=>state.reducer.posts)


  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user.role !== 'admin') {
      navigate('/login');
    }
  }, [user])
  
  const categories = ['Business', 'Software development', 'Tutorials', 'Technology']
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: '',
    image: null,
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleContentChange = (value) => {
    setFormData({
      ...formData,
      content: value,
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
      formDataWithImage.append('content', formData.content);
      formDataWithImage.append('category', formData.category);
      formDataWithImage.append('image', formData.image);

      
          // Dispatch createPost action and wait for its completion
      const action = await dispatch(createPost(formDataWithImage));
    // Check if the action is fulfilled (successfully dispatched)
    if (createPost.fulfilled.match(action)) {
      // If fulfilled, show success toast
      toast.success('Post created');
      navigate('/blog');
    } else {
      // If not fulfilled, handle error (e.g., show an error message to the user)
      toast.error('Error creating post:', action.error.message);
      console.error('Error creating post:', action.error.message);
    }
      // You can redirect to another page or update the UI as needed after successful post creation.
    } catch (error) {
      toast.error('Error creating post:', error.message);
      console.error('Error creating post:', error.message);
      // Handle error (e.g., show an error message to the user)
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  }
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet', 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      ['clean']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link','image'
  ]

  return (
    <section className=' px-0 md:px-[60px] lg:px-[100px] md:mb-10'>
      <div className='pt-[70px] px-5 md:px-52'>
        <h1 className='text-lg mt-5'>Create New Post</h1>
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

        <div className="mb-3">
          <label htmlFor="content" className="form-label">Content:</label>
          <ReactQuill modules={modules} formats={formats} value={formData.content} onChange={handleContentChange} />
        </div>

          
        <div className="form-group">
            <label className='form-label' htmlFor="category">Choose Category</label>
            <select
              name="category"
              id="category"
              className="form-control mb-5"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option selected>Choose Category</option>
              {/* <option selected>Choose...</option> */}
              {categories.map(category => (
                <option key={uuidv4()}  value={category}>{ category}</option>
              ))}

            </select>
          </div>

          <button type="submit" className="btn btn-primary mb-5">Create Post</button>
        </form>
        <button className='btn btn-default ' onClick={handleLogout}>Logout</button>

      </div>

    </section>
  )
}

export default CreatePost
