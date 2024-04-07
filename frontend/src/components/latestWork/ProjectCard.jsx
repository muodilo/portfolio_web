import React from 'react'

const ProjectCard = ({project}) => {
  return (
        <div className='border border-blue-400 rounded-3xl bg-blue-300/50 hover:bg-transparent transition duration-300 shadow-xl'>
          <div className='m-5 rounded-3xl overflow-hidden'>
            <img className='hover:scale-110 duration-100' src={project.image} alt="" />
          </div>
      <h1 className='px-5 text-2xl text-slate-600 font-bold'>{project.title }</h1>
          <div className='px-5 pb-5 mt-3'>
            <a href={project.githubUrl} className=' btn me-3' target='__blank'>GitHub</a>
            <a href={project.url} className=' btn' target='__blank'>Live Demo</a>
          </div>
        </div>
  )
}

export default ProjectCard
