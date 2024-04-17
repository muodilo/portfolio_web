import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { updatePost } from '../../features/post/postSlice';
import { logout } from '../../features/auth/authSlice';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const UpdatePost = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.reducer.auth);
  const { singlePost } = useSelector((state) => state.reducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user || user.role !== 'admin') {
      navigate('/login');
    }
  }, [user]);

  const postToUpdate = singlePost;

  const [formData, setFormData] = useState({
    title: postToUpdate ? postToUpdate.title : '',
    content: postToUpdate ? postToUpdate.content : '',
    category: postToUpdate ? postToUpdate.category : '',
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedPost = await dispatch(updatePost({ postId: singlePost._id, formData }));

      if (updatePost.fulfilled.match(updatedPost)) {
        toast.success('Post updated successfully');
        navigate(`/blog/${singlePost._id}`);
      } else {
        toast.error('Error updating post:', updatedPost.error.message);
        console.error('Error updating post:', updatedPost.error.message);
      }
    } catch (error) {
      toast.error('Error updating post:', error.message);
      console.error('Error updating post:', error.message);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <section className="px-0 md:px-[60px] lg:px-[100px] md:mb-10">
      <div className="pt-[70px] px-5 md:px-52">
        <h1 className="text-lg mt-5">Update Post</h1>
        <hr className="mb-6" />
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
          {/* Content */}
          <div className="mb-3">
            <label htmlFor="content" className="form-label">Content:</label>
            <ReactQuill
              theme="snow"
              value={formData.content}
              onChange={handleContentChange}
            />
          </div>
          {/* Category */}
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          >
            {/* Options for categories */}
          </select>
          {/* Submit button */}
          <button type="submit">Update Post</button>
        </form>
        {/* Logout button */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </section>
  );
};

export default UpdatePost;
