import './latestWork.css';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCurrentThreeProjects, reset } from '../../features/projects/projectSlice';
import ProjectCard from './ProjectCard';
import SkeletonCard from '../latestBlogs/SkeletonCard';


const LatestWork = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCurrentThreeProjects());
        dispatch(reset())
      } catch (error) {
        console.error(error);
        dispatch(reset())

      }
    };

    fetchData();
  }, [dispatch]);

  const {currentProjects,isCurrentProjectsLoading,isCurrentProjectsSuccess} = useSelector(state=>state.reducer.project)

  return (
    <section className="px-0 md:px-[60px] lg:px-[100px] pb-[60px] bg-slate-200 " id="work__section">
      <h1 className="text-center text-slate-600 font-bold text-[20px] pt-[40px]">My Recent Work</h1>
      <h1 className="text-center font-bold text-[40px] mb-[30px] text-blue-900">Portfolio</h1>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-3 mb-[">
      {isCurrentProjectsLoading && [1, 2, 3].map((project,index) => (
          <SkeletonCard key={ index} />
      ))}
        
        {(!isCurrentProjectsLoading && isCurrentProjectsSuccess) && currentProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}

      </div>
        <div className='text-center col-span-3'>
        <Link to='/projects'  className='text-center btn btn-neutral animate-bounce ease-linear'>Explore More Projects <FaLongArrowAltRight /></Link>

        </div>
    </section>
  )
}

export default LatestWork
