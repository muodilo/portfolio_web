import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getRelatedPosts, reset } from '../../features/post/postSlice';
import { Link } from 'react-router-dom';
import RelatedPostCard from './RelatedPostCard';

const SinglePost = () => {
  const dispatch = useDispatch();

  const {relatedPosts, singlePost } = useSelector(state => state.reducer.posts);

  const { title, content, image, category } = singlePost;

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      await dispatch(getRelatedPosts(category));
      dispatch(reset());
    }
    window.scrollTo(0, 0);
    fetchRelatedPosts();
  }, [singlePost, dispatch]);


  return (
    <div className='px-0 md:px-[60px] lg:px-[100px]'>
      <div className='pt-[70px] grid lg:grid-cols-4 grid-cols-1'>
        <div className='col-span-3 p-5 h-svh overflow-auto'>
          <Link to='/blog' className='btn btn-default '>Back</Link>
          <hr />
          <p className='text-center '>{ category}</p>
          <h1 className='text-center pt-5 md:text-[50px] text-[25px] font-bold'>{ title}</h1>
          
          <div className='pt-5 shadow-2xl rounded-2xl'>
            <img src={image} alt="image" className='rounded-2xl w-full'/>
          </div>
          <div className='pt-5'>
            <p>{ content}</p>
          </div>
        </div>

        <div className='px-5 pt-12'>
          <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest mb-5">RELATED POSTS</span>

          {relatedPosts.map(post=>(
            <RelatedPostCard key={post._id} post={post} />
            
          ))}

        </div>



      </div>
    </div>
  )
}

export default SinglePost
