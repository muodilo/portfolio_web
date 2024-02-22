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
        <nav aria-label="Page navigation example" className='flex items-center justify-center mt-10 mb-20'>
  <ul className="inline-flex -space-x-px text-base h-10">
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="flex items-center justify-center px-4 h-10 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>
      </div>
    </section>
  )
}

export default BlogsContainer
