import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel } from 'flowbite-react';
import { useSelector, useDispatch } from 'react-redux';

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
  },[user])

  return (
    <form className='pt-[90px]'>
    </form>
  )
}

export default CreatePost
