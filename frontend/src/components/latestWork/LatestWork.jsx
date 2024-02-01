import './latestWork.css';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from "react-icons/fa";

const LatestWork = () => {
  return (
    <section className="px-0 md:px-[60px] lg:px-[100px] pb-[60px] " id="work__section">
      <h1 className="text-center text-slate-600 font-bold text-[20px] mt-[40px]">My Recent Work</h1>
      <h1 className="text-center font-bold text-[40px] mb-[30px] text-blue-900">Portfolio</h1>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-3">
        <div className='border border-blue-400 rounded-3xl bg-blue-300/50 hover:bg-transparent transition duration-300 shadow-2xl'>
          <div className='m-5 rounded-3xl overflow-hidden'>
            <img src="https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <h1 className='px-5 text-2xl text-slate-600 font-bold'>Lorem ipsum dolor sit amet consectetur </h1>
          <div className='px-5 pb-5 mt-3'>
            <a href="" className=' btn me-3'>GitHub</a>
            <a href="" className=' btn'>Live Demo</a>
          </div>
        </div>

        
        <div className='border border-blue-400 rounded-3xl bg-blue-300/50 hover:bg-transparent transition duration-300 shadow-2xl'>
          <div className='m-5 rounded-3xl overflow-hidden'>
            <img src="https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <h1 className='px-5 text-2xl text-slate-600 font-bold'>Lorem ipsum dolor sit amet consectetur </h1>
          <div className='px-5 pb-5 mt-3'>
            <a href="" className=' btn me-3'>GitHub</a>
            <a href="" className=' btn'>Live Demo</a>
          </div>
        </div>

        
        <div className='border border-blue-400 rounded-3xl bg-blue-300/50 hover:bg-transparent transition duration-300 shadow-2xl'>
          <div className='m-5 rounded-3xl overflow-hidden'>
            <img src="https://images.pexels.com/photos/6633921/pexels-photo-6633921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
          <h1 className='px-5 text-2xl text-slate-600 font-bold'>Lorem ipsum dolor sit amet consectetur </h1>
          <div className='px-5 pb-5 mt-3'>
            <a href="" className=' btn me-3'>GitHub</a>
            <a href="" className=' btn'>Live Demo</a>
          </div>
        </div>
        <div className='text-center mx-auto col-span-3'>
        <Link to=''  className='text-center btn btn-neutral'>Explore More <FaLongArrowAltRight /></Link>

        </div>

      </div>
    </section>
  )
}

export default LatestWork
