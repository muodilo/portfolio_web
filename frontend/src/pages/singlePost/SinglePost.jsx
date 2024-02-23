import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const SinglePost = () => {

  const { singlePost } = useSelector(state => state.reducer.posts);

  const { title, content, image, category } = singlePost;
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

            <div className="   flex flex-col items-start cursor-pointer shadow-xl p-2 rounded bg-slate-50 mb-2">
          
                <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
                <p className="leading-relaxed">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. </p>

            </div>
            <hr />
          
            
            <div className="   flex flex-col items-start cursor-pointer shadow-xl p-2 rounded bg-slate-50">
          
                <h2 className="sm:text-2xl text-xl title-font font-medium text-gray-900 mt-4 mb-4">Roof party normcore before they sold out, cornhole vape</h2>
                <p className="leading-relaxed">Live-edge letterpress cliche, salvia fanny pack humblebrag narwhal portland. </p>

            </div>
            <hr />
          
            

        </div>



      </div>
    </div>
  )
}

export default SinglePost
