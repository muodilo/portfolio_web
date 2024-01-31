import M3 from '../../assets/odilo3.jpg'

const Header = () => {
  return (
    <section className="px-0 md:px-[60px] lg:px-[100px] h-svh pt-[75px]">
      <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 h-full">
        {/* left side of header */}
        <div className="lg:col-span-3 md:col-span-1 p-4 flex flex-col  justify-center">
          <h1 className="lg:text-[50px] md:text-[40px] text-[30px] font-bold mb-5">Full Stack Alchemist: Weaving Magic with Code</h1>
          <p className="text-xl text-gray-500 mb-5">Hello, I'm Odilo Murindahabi, a dedicated Full Stack Developer with a knack for turning ideas into captivating digital experiences. Through a blend of frontend finesse and backend wizardry, I bring simplicity and elegance to complex projects. Let's collaborate and bring your vision to life through the art of code.</p>
          <div>
            <button className="btn">Book a call with me</button>

          </div>
        </div>
        {/* right side of header */}
        <div className="lg:col-span-2 md:col-span-1">
          <div>
            <img src={ M3} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header