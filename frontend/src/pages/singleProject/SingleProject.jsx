import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { GoProject } from "react-icons/go";
import { FaGithubSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';


const SingleProject = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {specificProject } = useSelector(state => state.reducer.project);
  return (
    <section className="text-gray-600 body-font px-0 md:px-[60px] lg:px-[100px] md:mb-10 pt-24">
      

      <Link className='mx-5 btn mb-2' to='/projects'>Back</Link>
      <hr  className='mb-2'/>
  <div className="container px-5 pb-24 mx-auto flex flex-wrap">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img alt="feature" className="object-cover object-center h-full w-full" src={specificProject.image } />
    </div>
    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
          <GoProject fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </GoProject>
        </div>
        <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{specificProject.title }</h2>
              <p className="leading-relaxed text-base">{specificProject.description }</p>
        </div>
          </div>
          
      <div className="flex">
            <a href={ specificProject.url} target='__blank' className='btn me-5 btn-primary'>Visit website</a>
            <a href={specificProject.githubUrl} target='__blank' className='btn '>Github</a>
      </div>
    </div>
  </div>
</section>
  )
}

export default SingleProject
