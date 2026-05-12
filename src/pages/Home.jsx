import React from 'react'
import Hero from '../components/home/Hero.jsx';
import Programs from '../components/home/Programs.jsx';
import About from '../components/home/About.jsx';
import Curriculum from '../components/home/Curriculam.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import CTA from '../components/home/CTA.jsx';

const Home = () => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center'>
      <Hero />
      <Programs />
      <About />
      <Curriculum />
      <Testimonials />
      <CTA />
    </div>
  )
}

export default Home;