import { useState } from 'react';
import axios from 'axios';
import {  toast } from 'react-toastify';

const ProjectHeader = () => {
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
      <div className="bg-green-100/50 pt-[70px] rounded-lg text-center md:pt-40  md:pb-20 pb-5 shadow">
        <div>
          <h1 className="lg:text-[50px] md:text-[40px] text-[30px] font-bold mb-5 text-blue-900 animate-in fade-in zoom-in duration-300 pt-3">My Projects</h1>
          <p className="text-xl mb-6 animate-in fade-in zoom-in duration-300">Discover my portfolio showcasing web development, business ventures, and content creation.</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectHeader
