import React from 'react'
import { Link } from "react-router-dom";
import ListOfBlogs from '../../components/ListOfBlogs/ListOfBlogs'

const Profile = () => {
  return (
    <section className=' px-0 md:px-[60px] lg:px-[100px] '>
      <div className='pt-[70px] grid md:grid-cols-2 grid-cols-1'>
        <div className='bg-blue-200/50 px-5 max-h-svh overflow-auto pb-5'>
          <div className='flex items-center justify-between pt-3  pb-2'>
            <h1 className='text-3xl '>Blogs</h1>
            <Link to='/create-post' className='btn'>Create New</Link>

          </div>
          <hr className='mb-2' />
          <ListOfBlogs/>
        </div>
        <div className='bg-blue-100/50 px-5 max-h-svh overflow-auto pb-5'>
          <h1 className='text-3xl mb-5 mt-2'>projects</h1>
        </div>
      </div>
    </section>
  )
}

export default Profile
