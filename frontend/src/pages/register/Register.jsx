import React, { useEffect, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { FloatingLabel } from 'flowbite-react';


const Register = () => {

  return (
    <section className=' px-0 md:px-[60px] lg:px-[100px] md:mb-10"'>
      <div className='pt-[70px] pb-[70px] px-5 md:px-44 lg:px-80' >
        <h1 className='mb-5 mt-10 text-lg'>Register</h1>

        <form >
          <FloatingLabel variant="outlined" label="Name" type='text' required className='mb-3' />
          
          <FloatingLabel variant="outlined" label="Email address"  type='email' required className='mb-3' />
          
          <FloatingLabel variant="outlined" label="Create Password"  type='password' required className='mb-3' />
          
          <FloatingLabel variant="outlined" label="Confirm Password"  type='password' required className='mb-3' />
          
          <button type='submit' className='btn btn-primary my-2'>Sign Up</button>
        <p className='mt-3 mb-3'>Already have an account <Link to='/login' className='text-blue-600'>Login Here</Link></p>
        </form>

      </div>


    </section>
  )
}

export default Register
