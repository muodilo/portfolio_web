import { Link } from "react-router-dom"
import { RiMenu5Line } from "react-icons/ri";

const TopNav = () => {
  return (
    <div className="px-0 md:px-[60px] lg:px-[100px] shadow-xl fixed left-0 right-0  bg-blue-300 z-50">
      <div className="flex items-center min-h-[70px] justify-between w-full px-[10px] md:px-0">
        {/* brand */}

        <div className="">
          <Link to='/' className="text-3xl text-white font-bold">ODI<span className="text-blue-900 font-bold">LO</span> </Link>
        </div>

        {/* nav Links */}
        <ul className="md:flex hidden">
          <li className='me-5'>
            <Link to='/' className=" text-xl hover:text-blue-900 transition text-blue-900">Home</Link>
          </li>
          <li className='me-5'>
            <Link to='/about' className=" text-xl text-white hover:text-blue-900 transition">About</Link>
          </li>
          <li className='pe-5'>
            <Link to='/projects' className=" text-xl text-white hover:text-blue-900 transition">Projects</Link>
          </li>
          <li className='me-5'>
            <Link to='/blog' className=" text-xl text-white hover:text-blue-900 transition">Blog</Link>
          </li>
          <li className='me-5'>
            <Link to='/contact' className=" text-xl text-white hover:text-blue-900 transition">Contact</Link>
          </li>
          <li className='me-5'>
            <Link to='/services' className=" text-xl text-white hover:text-blue-900 transition">Services</Link>
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
          <li className='me-5  transition'>
            <Link to='/services'>Services</Link>
          </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNav
