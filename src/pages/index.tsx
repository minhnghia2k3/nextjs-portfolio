import Email from '@/components/Email';
import SocialIcons from '@/components/SocialIcons';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import React from 'react';


function Index() {
  return (
    <div className='app'>
      <Navbar />
      <SocialIcons />
      <Email />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
    </div>
  );
}

export default Index;