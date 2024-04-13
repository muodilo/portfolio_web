import React from 'react'
import ListOfBlogs from '../../components/ListOfBlogs/ListOfBlogs'

const Profile = () => {
  return (
    <section className=' px-0 md:px-[60px] lg:px-[100px] md:mb-10'>
      <div className='pt-[70px] grid md:grid-cols-2 grid-cols-1'>
        <div className=''>
          <h1>Blogs</h1>
          <ListOfBlogs/>
        </div>
        <div>
          <h1>projects</h1>
        </div>
      </div>
    </section>
  )
}

export default Profile
