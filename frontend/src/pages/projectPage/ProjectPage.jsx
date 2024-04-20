
import ProjectHeader from "../../components/projectHeader/ProjectHeader";
import ProjectContainer from "../../components/projectContainer/ProjectContainer";
import { useEffect } from 'react';
const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProjectHeader />
      <ProjectContainer/>
    </div>
  )
}

export default ProjectPage
