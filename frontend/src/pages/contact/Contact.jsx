import React from 'react'
import M3 from '../../assets/odilo3.jpg'
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className='px-0 md:px-[60px] lg:px-[100px] md:mb-10'>
      <div className=' pt-[70px] grid md:grid-cols-2 grid-cols-1'>
        <div className='pt-[70px] bg-blue-100/50 px-5 animate-in slide-in-from-left duration-300'>
          <h1 className='lg:text-5xl text-4xl  '>How can I help you? Let’s get in touch👋</h1>
          <div className='pt-7 animate-in fade-in zoom-in duration-300'>
            <img src='https://images.pexels.com/photos/6077239/pexels-photo-6077239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
          </div>
          <div className='mt-6 ps-5 grid grid-cols-1 lg:grid-cols-2 pb-5 '>
            <div className='flex items-center shadow p-2 m-1 bg-slate-300/40 rounded'>
              <div>
              <MdOutlineMail className='me-3 text-2xl' />
              </div>
              <div>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:odilomurindahabi@gmail.com" target='__blank' className="text-indigo-500 leading-relaxed">odilomurindahabi@email.com</a>
              </div>
            </div>

            <div className='flex items-center shadow p-2 m-1  bg-slate-300/40 rounded'>
              <div>
                <IoCallOutline className='me-3 text-2xl'/>
              </div>
              <div>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed text-blue-500"><a href="tel:+250785244715" target='__blank'>+250785244715</a></p>
              </div>
            </div>

            <div className='flex items-center shadow p-2 m-1  bg-slate-300/40 rounded'>
              <div >
              <FaWhatsapp className='me-3 text-2xl'/>
              </div>
              <div>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">WHATSAPP</h2>
                <p className="leading-relaxed text-blue-500"><a href="https://wa.me/250785244715" target='__blank'>+250785244715</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-[70px] px-3'>
          <h1 className='text-3xl'>Fill our the form below to get started</h1>
        </div>
      </div>
    </section>
  )
}

export default Contact
