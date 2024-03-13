import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FloatingLabel } from 'flowbite-react';

const CreatePost = () => {

  const navigate = useNavigate();

  useEffect(() => {
    navigate('/signup');
  }),[];
  return (
    <form className='pt-[90px]'>
    </form>
  )
}

export default CreatePost
