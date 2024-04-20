import { useEffect } from 'react';
import BlogCard from "../latestBlogs/BlogCard";
import SkeletonCard from '../latestBlogs/SkeletonCard';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPosts,reset } from "../../features/post/postSlice";

const BlogsContainer = () => {
  const dispatch = useDispatch();

  const { allPosts,isAllPostsLoading,isAllPostsSuccess } = useSelector(state => state.reducer.posts);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getAllPosts());
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
        <div className="text-center md:mb-16 animate-in fade-in zoom-in duration-300">
          <button className="btn m-2">All blogs</button>
          <button className="btn btn-ghost  m-2">Business</button>
          <button className="btn btn-ghost  m-2">Software development</button>
          <button className="btn btn-ghost  m-2">Tutorials</button>
          <button className="btn btn-ghost m-2">Technology</button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 animate-in fade-in zoom-in duration-300">

        
        {isAllPostsLoading && [1,2,3,4,5,6].map((post,index) => (
            <SkeletonCard key={index}  />
          ))}
        
        {(!isAllPostsLoading && isAllPostsSuccess) && allPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
          




        </div>

      </div>
    </section>
  )
}

export default BlogsContainer
