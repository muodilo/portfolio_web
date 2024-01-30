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
        <ul className="flex">
          <li className='pe-5 font-bold'>
            <Link to='/'>Home</Link>
          </li>
          <li className='pe-5 font-bold'>
            <Link to='/about'>About</Link>
          </li>
          <li className='pe-5 font-bold'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='pe-5 font-bold'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='pe-5 font-bold'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='pe-5 font-bold'>
            <Link to='/services'>Services</Link>
          </li>
        </ul>

        {/* book a call button */}
        <div>

        </div>
        {/* menu icon */}
        <div>

        </div>
      </div>
    </div>
  )
}

export default TopNav
