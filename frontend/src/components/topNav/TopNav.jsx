import { Link } from "react-router-dom";
import { RiMenu5Line } from "react-icons/ri";
import { useState } from 'react';

const TopNav = () => {
  const [activeNav, setActiveNav] = useState('Home');

  return (
    <div className="px-0 md:px-[60px] lg:px-[100px] shadow-xl fixed left-0 right-0 bg-blue-300/95 z-50">
      <div className="flex items-center min-h-[70px] justify-between w-full px-[10px] md:px-0">
        {/* brand */}
        <div className="">
          <Link to='/' className="text-3xl text-white font-bold">Odilo. </Link>
        </div>

        {/* nav Links */}
        <ul className="md:flex hidden">
          <li className='me-5'>
            <Link
              to='/'
              className={`text-xl font-bold hover:text-blue-900 transition ${activeNav === 'Home' ? 'text-blue-900' : 'text-white'}`}
              onClick={() => setActiveNav('Home')}
            >
              Home
            </Link>
          </li>
          <li className='me-5'>
            <Link to='/about'
              className={`text-xl font-bold hover:text-blue-900 transition ${activeNav === 'About' ? 'text-blue-900' : 'text-white'}`}
              onClick={() => setActiveNav('About')}
            >
              About
            </Link>
          </li>
          <li className='pe-5'>
            <Link to='/projects'
              className={`text-xl font-bold hover:text-blue-900 transition ${activeNav === 'Projects' ? 'text-blue-900' : 'text-white'}`}
              onClick={() => setActiveNav('Projects')}
            >
              Projects
            </Link>
          </li>
          <li className='me-5'>
            <Link to='/blog'
              className={`text-xl font-bold  hover:text-blue-900 transition ${activeNav === 'Blog' ? 'text-blue-900' : 'text-white'}`}
              onClick={() => setActiveNav('Blog')}
            >
              Blog
            </Link>
          </li>
          <li className='me-5'>
            <Link to='/contact'
              className={`text-xl font-bold  hover:text-blue-900 transition ${activeNav === 'Contact' ? 'text-blue-900' : 'text-white'}`}
              onClick={() => setActiveNav('Contact')}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* book a call button */}
        <div className="ms-auto md:ms-0">
          <button className=" btn btn-outline">Book a call</button>
        </div>
        {/* menu icon */}
        <div className="dropdown dropdown-bottom dropdown-end md:hidden block">
          <div tabIndex={0} role="button" className="btn  m-1"><RiMenu5Line /></div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
          <li className='me-5  '>
            <Link to='/'>Home</Link>
          </li>
          <li className='me-5  '>
            <Link to='/about'>About</Link>
          </li>
          <li className='pe-5  transition'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='me-5  transition'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='me-5  transition'>
            <Link to='/contact'>Contact</Link>
          </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNav
