import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { FloatingLabel } from 'flowbite-react';
import { toast } from 'react-toastify';
import { getSpecificPost, reset } from '../../features/post/postSlice';
import {logout} from '../../features/auth/authSlice'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSelector, useDispatch } from 'react-redux';
import { FileInput, Label } from 'flowbite-react';
import { formatDate } from 'date-fns';

const UpdatePost = () => {

  const navigate = useNavigate()
  const { user } = useSelector(state => state.reducer.auth);
  const { singlePost } = useSelector((state) => state.reducer.posts);


  useEffect(() => {
    if (!user) {
      navigate('/login');
    } else if (user.role !== 'admin') {
      navigate('/login');
    }
  }, [user])
  
  const categories = ['Business', 'Software development', 'Tutorials', 'Technology']
  const dispatch = useDispatch()

  const postToUpdate = singlePost;

  const [formData, setFormData] = useState({
    title: postToUpdate ? postToUpdate.title : '',
    content: postToUpdate ? postToUpdate.content : '',
    category: postToUpdate ? postToUpdate.category : '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        }
      }
      const postId = singlePost._id;

      const updatedPost = await axios.put(`http://localhost:5000/api/v1/posts/${postId}`, formData, config);
      toast.success('Post updated successfully');
      dispatch(getSpecificPost(postId))

        navigate(`/blog/${singlePost._id}`);
      

  } catch (error) {
    toast.error('Error updating post:', error.message);
    console.error('Error updating post:', error.message);
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
        <h1 className='text-lg mt-5'>Update A Post</h1>
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

          <button type="submit" className="btn btn-primary mb-5">Update</button>
        </form>
        <button className='btn btn-default ' onClick={handleLogout}>Logout</button>

      </div>

    </section>
  )
}

export default UpdatePost
