import './service.css'

const Services = () => {
  return (
    <section className="px-0 md:px-[60px] lg:px-[100px]  bg-blue-300/50 pt-[30px] pb-[60px] shadow-2xl">
      <div className="p-2">

        <h1 className="text-center text-slate-600 font-bold text-[20px]">What I offer</h1>
        <h1 className="text-center font-bold text-[40px] mb-[30px] text-blue-900">SERVICES</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-3 gap-4">
          <div className="shadow-2xl service__card bg-slate-100">
            <div className="bg-blue-300 shadow-2xl py-5 service__title">
              <h1 className="text-center text-[25px] text-white">Full Stack Development</h1>
            </div>
            <div>
              <p className="text-gray-950 px-3 pt-5 pb-5 text-xl z-20">Expertise in both frontend and backend technologies, delivering comprehensive solutions. Proficient in languages such as JavaScript, Python, and Java, with experience in frameworks like React, Angular, and Node.js.</p>
            </div>
          </div>
          <div className="shadow-2xl service__card bg-slate-100">
            <div className="bg-blue-300 py-5 service__title shadow-2xl">
              <h1 className="text-center text-[25px] text-white">Responsive Web Design</h1>
            </div>
            <div>
              <p className="text-gray-600 px-3 pt-5 pb-5 text-xl">Crafting visually stunning and functional websites that seamlessly adapt to various devices. Skilled in responsive design frameworks, including Bootstrap, to ensure an optimal user experience.</p>
            </div>
          </div>
          <div className=" shadow-2xl service__card bg-slate-100">
            <div className="bg-blue-300 shadow-2xl py-5 service__title">
              <h1 className="text-center text-[25px] text-white">Database Management</h1>
            </div>
            <div>
              <p className="text-gray-600 px-3 pt-5 pb-5 text-xl">Proven ability in working with SQL and NoSQL databases. Expertise in database design, optimization, and management to support scalable and efficient applications.</p>
            </div>
          </div>
          <div className=" shadow-2xl service__card bg-slate-100">
            <div className="bg-blue-300 shadow-2xl py-5 service__title">
              <h1 className="text-center text-[25px] text-white">API Development</h1>
            </div>
            <div>
              <p className="text-gray-600 px-3 pt-5 pb-5 text-xl">Designing, implementing, and consuming robust APIs. Proficient in creating RESTful and GraphQL APIs to facilitate seamless communication between different components of an application.</p>
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  )
}

export default Services
