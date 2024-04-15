import { Link } from "react-router-dom"
import { useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentThreePosts,reset } from '../../features/post/postSlice';
import BlogCard from "./BlogCard";
import SkeletonCard from "./SkeletonCard";

const LatestBlogs = () => {
  const dispatch = useDispatch();
  const { currentPosts,isCurrentPostsLoading,isCurrentPostsError,isCurrentPostsSuccess } = useSelector(state => state.reducer.posts)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCurrentThreePosts());
        dispatch(reset())
      } catch (error) {
        console.error(error);
        dispatch(reset())


        
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <section className="px-0 md:px-[60px] lg:px-[100px] pb-[60px] bg-blue-300/50 ">
      <h1 className="text-center text-slate-600 font-bold text-[20px] pt-[40px]">Thoughts
      on Technology</h1>
      <h1 className="text-center font-bold text-[40px] mb-[30px] text-blue-900">Latest Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">

        {isCurrentPostsLoading && [1, 2, 3].map((post,index) => (
          <SkeletonCard key={ index} />
        ))}

        {(!isCurrentPostsLoading && isCurrentPostsSuccess) && currentPosts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}


      </div>

      <div className='text-center col-span-3'>
        <Link to='/blog'  className='text-center btn btn-neutral animate-bounce ease-linear'>Explore More Blogs <FaLongArrowAltRight /></Link>

        </div>
      
      
    </section>
  )
}

export default LatestBlogs
