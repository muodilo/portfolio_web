import { useEffect } from 'react';
import BlogCard from "../latestBlogs/BlogCard";
import ProjectCard from '../latestWork/ProjectCard';
import SkeletonCard from '../latestBlogs/SkeletonCard';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProjects,reset } from '../../features/projects/projectSlice';

const ProjectContainer = () => {
  const dispatch = useDispatch();

  const { allProjects,isAllProjectsLoading,isAllProjectsSuccess } = useSelector(state => state.reducer.project);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAllProjects());
        dispatch(reset())
      } catch (error) {
        console.error(error);
        dispatch(reset())

      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <section className="px-0 md:px-[60px] lg:px-[100px]">
      <div className="p-3">

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 animate-in fade-in zoom-in duration-300">

        
        {isAllProjectsLoading && [1,2,3,4,5,6].map((project,index) => (
            <SkeletonCard key={index}  />
          ))}
        
        {(!isAllProjectsLoading && isAllProjectsSuccess) && allProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
          




        </div>
        

      </div>
    </section>
  )
}

export default ProjectContainer
