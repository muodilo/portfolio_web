import React,{useEffect} from 'react'
import {useDispatch } from 'react-redux';
import { getSpecificPost, reset } from '../../features/post/postSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Card } from "flowbite-react";


const RelatedPostCard = ({ post }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    const fetchSinglePost = async () => {
      try {
        await dispatch(getSpecificPost(post._id));
        navigate('/blog/' + post._id);
        window.scrollTo(0, 0);
        dispatch(reset());
        
      } catch (error) {
        toast.error(isSinglePostErrorMessage)
      }
    }
    fetchSinglePost();
    dispatch(reset());
  }

  const truncateContent = (content, wordCount = 10) => {
    const words = content.split(/\s+/); // Split by spaces
    const truncatedWords = words.slice(0, wordCount);
    const truncatedContent = truncatedWords.join(' ');
    return truncatedContent;
  };

  return (
    // <div className="   flex flex-col items-start cursor-pointer shadow-xl p-2 rounded bg-slate-50 mb-4" onClick={handleClick}>
          
    //   <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4">{post.title }</h2>
    //   <div dangerouslySetInnerHTML={{ __html: truncateContent(post.content, 10) }} />

    // </div>

    <Card className="max-w-sm mb-4">
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {post.title }
    </h5>
    <div dangerouslySetInnerHTML={{ __html: truncateContent(post.content, 10) }} />
    <Button onClick={handleClick}>
      Read more
      <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  </Card>
            
  )
}

export default RelatedPostCard
