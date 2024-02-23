import React from 'react'

const RelatedPostCard = ({ post }) => {

  const truncateContent = (content, wordCount = 10) => {
    const words = content.split(/\s+/); // Split by spaces
    const truncatedWords = words.slice(0, wordCount);
    const truncatedContent = truncatedWords.join(' ');
    return truncatedContent;
  };
  return (
    <div className="   flex flex-col items-start cursor-pointer shadow-xl p-2 rounded bg-slate-50 mb-4">
          
      <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4">{post.title }</h2>
    <p className="leading-relaxed">{truncateContent(post.content, 10)}</p>

    </div>
            
  )
}

export default RelatedPostCard
