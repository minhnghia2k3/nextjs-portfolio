import Email from '@/components/Email';
import SocialIcons from '@/components/SocialIcons';
import Navbar from '@/sections/Navbar';
import React from 'react';


function Index() {
  return (
    <div className='app'>
      <Navbar />
      <SocialIcons />
      <Email />
    </div>
  );
}

export default Index;