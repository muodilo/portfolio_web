import './latestWork.css';

const LatestWork = () => {
  return (
    <section className="px-0 md:px-[60px] lg:px-[100px] h-svh" id="work__section">
      <h1 className="text-center text-slate-600 font-bold text-[20px] mt-[40px]">My Recent Work</h1>
      <h1 className="text-center font-bold text-[40px] mb-[30px] text-blue-900">Portfolio</h1>
      
      <div className="grid grid-cols-3 gap-5">
        <div className='border border-blue-400 rounded-3xl'>
          <div className='m-5 rounded-3xl overflow-hidden'>
            <img src="https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          </div>
        </div>
        <div>
          b
        </div>
        <div>
          c
        </div>
      </div>
    </section>
  )
}

export default LatestWork
