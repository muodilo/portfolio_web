
import { formatDistanceToNow } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { getSpecificPost, reset } from '../../features/post/postSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SlShareAlt } from "react-icons/sl";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdCategory } from "react-icons/md";




const BlogCard = ({ post }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSinglePostErrorMessage } = useSelector(state => state.reducer.posts);
  const SERVER_URL = import.meta.env.REACT_APP_SERVER_URL;

  const handleClick = () => {
    const fetchSinglePost = async () => {
      try {
        await dispatch(getSpecificPost(post._id));
        navigate('/blog/' + post._id);
        dispatch(reset());
      } catch (error) {
        toast.error(isSinglePostErrorMessage)
      }
    }
    fetchSinglePost();
    dispatch(reset());
  }
  // Function to truncate the content to 2 lines
  const truncateContent = (content, wordCount = 10) => {
    const words = content.split(/\s+/); // Split by spaces
    const truncatedWords = words.slice(0, wordCount);
    const truncatedContent = truncatedWords.join(' ');
    return truncatedContent;
  };

  // Calculate time ago
  const postedTimeAgo = formatDistanceToNow(new Date(post.createdAt), { addSuffix: true });

  // Share functionality
  const handleShare = () => {

    const share = async () => {
      
      try {
        if (navigator.share) {
          await navigator.share({
            title: post.title,
            text: post.content,
            url: `${SERVER_URL}/blog/${post._id}`,
          });
        } else {
          console.error('Share API not supported');
        }
      } catch (error) {
        console.error('Error sharing:', error.message);
      }
    }

    const fetchSinglePost = async () => {
      try {
        await dispatch(getSpecificPost(post._id));
        dispatch(reset());
        share();
      } catch (error) {
        console.error(isSinglePostErrorMessage)
      }
    }

    fetchSinglePost();
    dispatch(reset());


  };

  return (
    <div className="bg-slate-100 rounded cursor-pointer" >
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-110 duration-100"
          src={post.image}
          alt="blog"
          onClick={handleClick}
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 flex"><MdCategory className='me-1'/> {post.category}</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: truncateContent(post.content) }} className="leading-relaxed mb-3" />
          <div className="flex items-center justify-between">
            <span className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"><FaRegCalendarAlt className='me-2'/>{postedTimeAgo}
            </span>
            <span>
              <button className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 ml-2" onClick={handleShare}
              >
                <SlShareAlt />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

