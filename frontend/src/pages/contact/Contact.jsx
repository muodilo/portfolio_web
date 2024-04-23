import React from 'react'
import M3 from '../../assets/odilo3.jpg'
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { useRef,useEffect } from 'react';
import emailjs from '@emailjs/browser'
import { FloatingLabel } from 'flowbite-react';
import { Label, Textarea } from "flowbite-react";
import { toast } from 'react-toastify';


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const serviceId = import.meta.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        },
    );
    e.target.reset()
    toast.success(`Message sent! We've received your inquiry and will be in touch shortly.`);
  };


  return (
    <section className='px-0 md:px-[60px] lg:px-[100px] md:mb-10'>
      <div className=' pt-[70px] grid md:grid-cols-2 grid-cols-1'>
        <div className='pt-[70px] bg-blue-100/50 px-5 animate-in slide-in-from-left duration-300'>
          <h1 className='lg:text-5xl text-4xl  '>How can I help you? Let’s get in touch👋</h1>
          <div className='pt-7 animate-in fade-in zoom-in duration-300'>
            <img className='rounded-2xl shadow-2xl' src='https://images.pexels.com/photos/6077239/pexels-photo-6077239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          </div>
          <div className='mt-6 ps-5 grid grid-cols-1 lg:grid-cols-2 pb-5 '>
            <div className='flex items-center shadow p-2 m-1 bg-slate-300/40 rounded'>
              <div>
              <MdOutlineMail className='me-3 text-2xl text-lime-800' />
              </div>
              <div>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a href="mailto:odilomurindahabi@gmail.com" target='__blank' className="text-indigo-500 leading-relaxed">odilomurindahabi@email.com</a>
              </div>
            </div>

            <div className='flex items-center shadow p-2 m-1  bg-slate-300/40 rounded'>
              <div>
                <IoCallOutline className='me-3 text-2xl text-lime-800'/>
              </div>
              <div>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed text-blue-500"><a href="tel:+250785244715" target='__blank'>+250785244715</a></p>
              </div>
            </div>

            <div className='flex items-center shadow p-2 m-1  bg-slate-300/40 rounded'>
              <div >
              <FaWhatsapp className='me-3 text-2xl text-green-400'/>
              </div>
              <div>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">WHATSAPP</h2>
                <p className="leading-relaxed text-blue-500"><a href="https://wa.me/250785244715" target='__blank'>+250785244715</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className='pt-[70px] px-5'>
          <h1 className='text-3xl'>Fill out the form below to get started</h1>
          <p className='mt-5 '>Complete the form below, and we'll get back to you as soon as possible. Your inquiry is important to us!</p>

          <form ref={form} onSubmit={sendEmail} className='mt-5 mb-5'>
            
            <FloatingLabel
            variant="outlined"
            label="Name"
            name='name'
            type='text'
            required
            className='mb-5'

            />

            <FloatingLabel
            variant="outlined"
            label="Phone"
            name='phone'
            type='text'
            required
            className='mb-5'

            />
            <FloatingLabel
            variant="outlined"
            label="Email"
            name='email'
            type='text'
            required
            className='mb-5'

            />
            
            
            <div className='mb-5'>
              <Label htmlFor="comment" value="Your message" />
              <Textarea id="comment" name="message" placeholder="Your message..." required rows={7} />
            </div>
            
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact



