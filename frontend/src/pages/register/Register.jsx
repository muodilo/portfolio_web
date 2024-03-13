import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FloatingLabel } from 'flowbite-react';
import { toast } from 'react-toastify';
import { register,resetUser } from '../../features/auth/authSlice';


const Register = () => {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2:'',
  })

  const { username, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(state => state.reducer.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    //redirect when logged in
    if (isSuccess || user) {
      navigate('/login')
    }

    dispatch(resetUser());
  }, [isError, isSuccess, user, message, dispatch])
  
  const onChange = (e) => {  
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:e.target.value,

    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (password !== password2) {
      toast.error('password mismatch');
    } else {
      const userData = {
        username,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }



  return (
    <section className=' px-0 md:px-[60px] lg:px-[100px] md:mb-10"'>
      <div className='pt-[70px] pb-[70px] px-5 md:px-44 lg:px-80' >
        <h1 className='mb-5 mt-10 text-lg'>Register</h1>

        <form onSubmit={handleSubmit}>
          <FloatingLabel
            variant="outlined"
            label="Name"
            name='username'
            type='text'
            required
            className='mb-3'
            value={username}
            onChange={onChange}
          />
          
          <FloatingLabel
            variant="outlined"
            label="Email address"
            name='email'
            type='email'
            required
            className='mb-3'
            value={email}
            onChange={onChange}
          />
          
          <FloatingLabel
            variant="outlined"
            label="Create Password"
            name='password'
            type='password'
            required
            className='mb-3'
            value={password}
            onChange={onChange}
          />
          
          <FloatingLabel
            variant="outlined"
            label="Confirm Password"
            name='password2'
            type='password'
            required className='mb-3'
            value={password2}
            onChange={onChange}
          />
          
          <button type='submit' className='btn btn-primary my-2'>Sign Up</button>
        <p className='mt-3 mb-3'>Already have an account <Link to='/login' className='text-blue-600'>Login Here</Link></p>
        </form>

      </div>


    </section>
  )
}

export default Register
