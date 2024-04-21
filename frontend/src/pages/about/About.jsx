import React,{useEffect} from 'react'
import M1 from '../../assets/odilo.jpg';
import './About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section id='about' className='px-0 md:px-[60px] lg:px-[100px]'>
      <div className='pt-[80px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
        <div className='flex flex-col justify-center lg:col-span-2 col-span-1 px-5 rounded-2xl animate-in fade-in zoom-in duration-300 '>
        <h1 className="lg:text-[50px] md:text-[40px] text-[30px] font-bold mb-5 text-blue-900 ">About Me</h1>
        <p className="text-xl text-gray-600 mb-[30px]">Greetings! I'm Odilo Murindahabi, a digital artisan specializing in Full Stack Alchemy. My journey in coding began with curiosity and evolved into a passion for crafting digital marvels.</p>
        <p className="text-xl text-gray-600 mb-[30px]">With an artistic touch and unwavering precision, I bring ideas to life, sculpting immersive digital experiences that captivate and inspire. Collaborating with diverse teams and clients, I turn visions into reality, pushing the boundaries of innovation.</p>
        <p className="text-xl text-gray-600 mb-[30px]">Beyond code, I draw inspiration from the world's canvas, believing that creativity thrives on diverse perspectives. Let's embark on a journey of digital transformation together, where we'll weave magic with code and turn dreams into digital masterpieces.</p>
        </div>
        <div className=' md:pt-0 pt-5 px-5 flex'>
          <img src={M1 } alt="odilo" className='rounded-[20px] shadow-2xl animate-in fade-in zoom-in duration-300 shadow-2xl' />
        </div>
      </div>
      <div className='pt-5'>

      </div>
    </section>
  )
}

export default About
