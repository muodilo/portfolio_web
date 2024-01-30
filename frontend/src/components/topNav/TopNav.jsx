import { Link } from "react-router-dom"

const TopNav = () => {
  return (
    <div className="px-0 md:px-[60px] lg:px-[100px] ">
      <div className="flex items-center min-h-[70px] justify-between w-full">
        {/* brand */}

        <div className="">
          <Link to='/' className="text-2xl">ODILO</Link>
        </div>

        {/* nav Links */}
        <ul className="flex">
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
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
