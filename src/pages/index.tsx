import Email from '@/components/Email';
import SocialIcons from '@/components/SocialIcons';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Experience from '@/sections/Experience';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import Projects from '@/sections/Projects';
import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';
function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoading = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true)
      , 450)
  }
  return (
    <div className='app'>
      <Head>
        <title>Minh Nghia Le.</title>
        <link rel="shortcut icon" href="/avatar.png"></link>
      </Head>
      {
        showContent
        && (
          <>
            <Navbar />
            <SocialIcons />
            <Email />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </main>
          </>
        )
      }
      <Loader setIsLoading={handleLoading} isLoading={isLoading} />

    </div>
  );
}

export default Index;