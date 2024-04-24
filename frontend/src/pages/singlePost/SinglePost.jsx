import React, { useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { getRelatedPosts, reset } from '../../features/post/postSlice';
import { Link } from 'react-router-dom';
import RelatedPostCard from './RelatedPostCard';
import { BsExclamationTriangleFill } from "react-icons/bs";
import { SlShareAlt } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const SinglePost = () => {
  const dispatch = useDispatch();
  const { relatedPosts, singlePost } = useSelector(state => state.reducer.posts);
  const { title, content, image, category,createdAt } = singlePost;

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      await dispatch(getRelatedPosts(category));
      dispatch(reset());
    }
    window.scrollTo(0, 0);
    fetchRelatedPosts();
  }, [category, dispatch]);

  // Filter out the current post from related posts
  const filteredRelatedPosts = relatedPosts.filter(post => post._id !== singlePost._id);
  
  const postedTimeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });
  const SERVER_URL = import.meta.env.REACT_APP_SERVER_URL;

  const handleShare = () => {

    const share = async () => {
      
      try {
        if (navigator.share) {
          await navigator.share({
            title: title,
            text:content,
            url: `${SERVER_URL}/blog/${singlePost._id}`,
          });
        } else {
          console.error('Share API not supported');
        }
      } catch (error) {
        console.error('Error sharing:', error.message);
      }
    }
    share();
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  const renderContentWithCopyOption = () => {
    // Split the content by code blocks
    const blocks = content.split(/<pre class="ql-syntax".*?<\/pre>/g);

    return blocks.map((block, index) => {
      // Check if block is code or regular HTML
      if (index % 2 === 0) {
        // Regular HTML block
        return <div key={index} dangerouslySetInnerHTML={{ __html: block }} />;
      } else {
        // Code block
        const code = block.trim();
        return (
          <div key={index} className="code-block-container">
            <pre>
              <code>{code}</code>
            </pre>
            <button className="btn " onClick={() => handleCopyCode(code)}>
              Copy
            </button>
          </div>
        );
      }
    });
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className='px-0 md:px-[60px] lg:px-[100px]'>
      <div className='pt-[70px] grid lg:grid-cols-4 grid-cols-1'>
        <div className='col-span-3 p-5 h-svh overflow-auto'>
          <Link to='/blog' className='btn btn-default'>Back</Link>
          <hr />
          <p className='text-center'>{category}</p>
          <h1 className='text-center pt-5 md:text-[50px] text-[25px] font-bold'>{title}</h1>
          <div className='flex items-center justify-around'>
            <div className='flex items-center '>
              <FaUserCircle className='me-1 text-slate-500' />
              <p className='text-indigo-500'>By Odilo</p>
            </div>
          <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 me-10"><FaRegCalendarAlt className='me-1'/>{postedTimeAgo}
            </span>
            <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ml-2" onClick={handleShare}
              >
                <SlShareAlt />
            </button>
          </div>
          <div className='pt-5 shadow-2xl rounded-2xl'>
            <img src={image} alt="image" className='rounded-2xl w-full' />
          </div>
          <div className='pt-5'>
            {/* Render content with copy option */}
            {renderContentWithCopyOption()}
          </div>
        </div>

        <div className='px-5 pt-12 bg-slate-200'>
          <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest mb-5">RELATED POSTS</span>

          {filteredRelatedPosts.length === 0 ? (
            <p className="text-center text-gray-600 flex items-center mb-5">
              <BsExclamationTriangleFill className='me-1' /> No related posts found.
            </p>
          ) : (
            filteredRelatedPosts.map(post => (
              <RelatedPostCard key={post._id} post={post} onClick={handleClick } />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default SinglePost;
