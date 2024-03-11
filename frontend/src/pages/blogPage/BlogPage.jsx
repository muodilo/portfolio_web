import BlogHeader from "../../components/blogHeader/BlogHeader"
import BlogsContainer from "../../components/BlogsContainer/BlogsContainer"
import { useEffect } from 'react';
const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BlogHeader />
      <BlogsContainer/>
    </div>
  )
}

export default BlogPage
