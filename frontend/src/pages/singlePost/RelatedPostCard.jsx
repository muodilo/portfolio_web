import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSpecificPost, reset } from '../../features/post/postSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


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
    <div className="   flex flex-col items-start cursor-pointer shadow-xl p-2 rounded bg-slate-50 mb-4" onClick={handleClick}>
          
      <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4">{post.title }</h2>
      <div dangerouslySetInnerHTML={{ __html: truncateContent(post.content, 10) }} />

    </div>
            
  )
}

export default RelatedPostCard
