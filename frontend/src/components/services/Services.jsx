import './service.css'
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { VscServerProcess } from "react-icons/vsc";
import { DiResponsive } from "react-icons/di";
import { CgServer } from "react-icons/cg";
import { CiDatabase } from "react-icons/ci";

const Services = () => {
  return (
    // <section className="px-0 md:px-[60px] lg:px-[100px]  bg-blue-300/50 pt-[30px] pb-[60px] shadow-xl">
    //   <div className="p-2">

    //     <h1 className="text-center text-slate-600 font-bold text-[20px]">What I offer</h1>
    //     <h1 className="text-center font-bold text-[40px] mb-[30px] text-blue-900">SERVICES</h1>
    //     <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-3 gap-4">
    //       <div className="shadow-xl hover:shadow-none transition cursor-pointer service__card bg-slate-100">
    //         <div className="bg-slate-100 shadow-2xl py-5 service__title">
    //           <h1 className="text-center text-[25px] text-blue-900 font-bold">Full Stack Development</h1>
    //         </div>
    //         <div>
    //           <p className="text-slate-700 px-3 pt-5 pb-5 text-xl z-20">Expertise in both frontend and backend technologies, delivering comprehensive solutions. Proficient in languages such as JavaScript, Python, and Java, with experience in frameworks like React, Angular, and Node.js.</p>
    //         </div>
    //       </div>
    //       <div className="shadow-xl hover:shadow-none transition cursor-pointer service__card bg-slate-100">
    //         <div className="bg-slate-100 py-5 service__title shadow-2xl">
    //           <h1 className="text-center text-[25px] text-blue-900 font-bold">Responsive Web Design</h1>
    //         </div>
    //         <div>
    //           <p className="text-slate-700 px-3 pt-5 pb-5 text-xl">Crafting visually stunning and functional websites that seamlessly adapt to various devices. Skilled in responsive design frameworks, including Bootstrap, to ensure an optimal user experience.</p>
    //         </div>
    //       </div>
    //       <div className=" shadow-xl hover:shadow-none transition cursor-pointer service__card bg-slate-100">
    //         <div className="bg-slate-100 shadow-2xl py-5 service__title">
    //           <h1 className="text-center text-[25px] text-blue-900 font-bold">Database Management</h1>
    //         </div>
    //         <div>
    //           <p className="text-slate-700 px-3 pt-5 pb-5 text-xl">Proven ability in working with SQL and NoSQL databases. Expertise in database design, optimization, and management to support scalable and efficient applications.</p>
    //         </div>
    //       </div>
    //       <div className=" shadow-xl hover:shadow-none transition cursor-pointer service__card bg-slate-100">
    //         <div className="bg-slate-100 shadow-2xl py-5 service__title">
    //           <h1 className="text-center text-[25px] text-blue-900 font-bold">API Development</h1>
    //         </div>
    //         <div>
    //           <p className="text-slate-700 px-3 pt-5 pb-5 text-xl">Designing, implementing, and consuming robust APIs. Proficient in creating RESTful and GraphQL APIs to facilitate seamless communication between different components of an application.</p>
    //         </div>
    //       </div>
          
          
    //     </div>
    //   </div>
    // </section>
    <section className='px-0 md:px-[60px] lg:px-[100px]  bg-slate-300 pt-[30px] pb-[60px] ' id='service'>
      <div className="px-9">
        <h1 className="text-center text-slate-600 font-bold text-[20px]">What I offer</h1>
        <h1 className="text-center font-bold text-[40px] mb-[30px] text-blue-900">SERVICES</h1>


    <Timeline horizontal >
      
      <Timeline.Item className='mb-10 '>
        <Timeline.Point icon={CgServer} />
        <Timeline.Content>
          <Timeline.Title className='mt-5'>Full Stack Development</Timeline.Title>
          <Timeline.Body>
          Expertise in the MERN stack signifies proficiency in both frontend and backend technologies, offering comprehensive solutions. Skilled in languages like JavaScript, Python, and Java, with hands-on experience in frameworks such as React, Angular, and Node.js.
          </Timeline.Body>
          {/* <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button> */}
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className='mb-10 '>
        <Timeline.Point icon={DiResponsive} />
        <Timeline.Content>
          <Timeline.Title className='mt-5'>Responsive Web Design</Timeline.Title>
          <Timeline.Body>
          Crafting visually stunning and functional websites that seamlessly adapt to various devices. Proficient in responsive design frameworks like Tailwind CSS to ensure an optimal user experience.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className='mb-10 '>
        <Timeline.Point icon={VscServerProcess} />
        <Timeline.Content>
          <Timeline.Title className='mt-5'>API Development</Timeline.Title>
          <Timeline.Body>
          Designing, implementing, and consuming robust APIs. Proficient in creating RESTful APIs to facilitate seamless communication between different components of an application.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
        </Timeline>
        </div>
      </section>
  )
}

export default Services
