import { useState } from 'react';
import axios from 'axios';
import {  toast } from 'react-toastify';

const BlogHeader = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  }
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/subscribe', {
        email: email,
      });
      if (response.status === 201) {
        toast.success('Successfully subscribed!');
      } else if (response.status === 403) {
        toast.info('Already subscribed');
      }
    } catch (error) {
      toast.info('Already subscribed');
    } finally {
      setEmail('');
    }
  };

  return (
    <section className="px-0 md:px-[60px] lg:px-[100px] md:mb-10">
      <div className="bg-blue-100/50 pt-[70px] rounded-lg text-center md:pt-40  md:pb-20 pb-5 shadow">
        <div>
          <h1 className="lg:text-[50px] md:text-[40px] text-[30px] font-bold mb-5 text-blue-900 animate-in fade-in zoom-in duration-300 pt-3">Welcome to my blog</h1>
          <p className="text-xl mb-6 animate-in fade-in zoom-in duration-300">Join me on my journey as I share my insights and experiences on <br /> web development, business, and content creation.</p>
          <form
            className="animate-in fade-in zoom-in duration-300"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered  w-full max-w-xs"
              value={email}
              required
              onChange = {handleChange}
            />
            <button className="btn btn-neutral ms-1 mt-2 md:mt-0">SUBSCRIBE</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BlogHeader
