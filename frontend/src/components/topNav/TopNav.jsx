import { Link } from "react-router-dom"

const TopNav = () => {
  return (
    <div className="px-0 md:px-[60px] lg:px-[100px] shadow">
      <div className="flex items-center min-h-[70px] justify-between w-full ">
        {/* brand */}

        <div className="">
          <Link to='/' className="text-2xl">ODILO</Link>
        </div>

        {/* nav Links */}
        <ul className="md:flex hidden">
          <li className='me-5 font-bold hover:font-bold transition'>
            <Link to='/'>Home</Link>
          </li>
          <li className='me-5  hover:font-bold transition'>
            <Link to='/about'>About</Link>
          </li>
          <li className='pe-5  hover:font-bold transition'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='me-5  hover:font-bold transition'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='me-5  hover:font-bold transition'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='me-5  hover:font-bold transition'>
            <Link to='/services'>Services</Link>
          </li>
        </ul>

        {/* book a call button */}
        <div className="ms-auto md:ms-0">
          <button className="btn">Book a call</button>
        </div>
        {/* menu icon */}
        <div className="dropdown dropdown-bottom dropdown-end md:hidden block">
          <div tabIndex={0} role="button" className="btn m-1">C</div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopNav
