import React from 'react'
import { Link} from 'react-router-dom';
import { BsExclamationTriangleFill } from "react-icons/bs";

const PageNotFound = () => {
  return (
    <section className='px-0 md:px-[60px] lg:px-[100px] h-80 md:mb-5 flex justify-center items-center' >
      <div className='pt-[100px] pb-[30px] px-5 md:px-44 lg:px-80 '>
        <div className='flex items-center '>
        <BsExclamationTriangleFill  className='text-3xl me-3'/>
        <h1 className='text-3xl'>404 - Page Not Found</h1>
        </div>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to='/' className='text-blue-600 underline'>Back home</Link>
      </div>
    </section>
  )
}

export default PageNotFound
