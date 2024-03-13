import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FloatingLabel } from 'flowbite-react';
import { toast } from 'react-toastify';
import { login,resetUser } from '../../features/auth/authSlice';


const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password} = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(state => state.reducer.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    //redirect when logged in
    if (isSuccess || user) {
      navigate('/create');
    }

    dispatch(resetUser());
  }, [isError, isSuccess, user, message])
  
  const onChange = (e) => {  
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:e.target.value,

    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
      const userData = {
        email,
        password,
      }

      dispatch(login(userData))
    
  }



  return (
    <section className=' px-0 md:px-[60px] lg:px-[100px] md:mb-10"'>
      <div className='pt-[70px] pb-[70px] px-5 md:px-44 lg:px-80' >
        <h1 className='mb-5 mt-10 text-lg'>Login</h1>

        <form onSubmit={handleSubmit}>
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
          
          
          <button type='submit' className='btn btn-primary my-2'>Sign Up</button>
        <p className='mt-3 mb-3'>Don't have an account <Link to='/signup' className='text-blue-600'>Sign Up Here</Link></p>
        </form>

      </div>


    </section>
  )
}

export default Login
