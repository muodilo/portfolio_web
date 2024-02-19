import { Link } from "react-router-dom"
import { useEffect } from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentThreePosts } from '../../features/post/postSlice';
import BlogCard from "./BlogCard";

const LatestBlogs = () => {
  const dispatch = useDispatch();
  const { currentPosts } = useSelector(state => state.reducer.posts)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getCurrentThreePosts());
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);
  return (
    <section className="px-0 md:px-[60px] lg:px-[100px] pb-[60px] bg-blue-300/50 ">
      <h1 className="text-center text-slate-600 font-bold text-[20px] pt-[40px]">Thoughts63
      + on Technology</h1>
      <h1 className="text-center font-bold text-[40px] mb-[30px] text-blue-900">Latest Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">

        

      </div>

      <div className='text-center col-span-3'>
        <Link to='/blog'  className='text-center btn btn-neutral animate-bounce ease-linear'>Explore More Blogs <FaLongArrowAltRight /></Link>

        </div>
      
      
    </section>
  )
}

export default LatestBlogs
