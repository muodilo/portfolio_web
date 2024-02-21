import React from 'react'

const BlogCard = ({ post }) => {
  
   // Function to truncate the content to 2 lines
  const truncateContent = (content, wordCount = 10) => {
    const words = content.split(/\s+/); // Split by spaces
    const truncatedWords = words.slice(0, wordCount);
    const truncatedContent = truncatedWords.join(' ');
    return truncatedContent;
  };

  return (
    <div className="bg-slate-100 rounded">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img className="lg:h-48 md:h-36 w-full object-cover object-center hover:scale-110 duration-100" src={post.image} alt="blog"/>
      <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{ post.category}</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{ post.title}</h1>
        <p className="leading-relaxed mb-3">{truncateContent(post.content, 10)}</p>
        <div className="flex items-center flex-wrap ">
          <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">posted: 2h ago
          </a>

        </div>
      </div>
    </div>
    </div>
  )
}

export default BlogCard
