
import React from 'react';

import { ParallaxProvider } from 'react-scroll-parallax';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
// import Competencies from './components/competencies/Competencies_old';
import Testimonials from './components/testimonials/Testimonials';
import Skills from './components/skills/Skills';
import Sandbox from './pages/Sandbox';


function App() {
  return (

    <ParallaxProvider>
      {/* <main className="text-gray-400 bg-gray-900 body-font font-neue"> */}
      <main className="text-gray-400 body-font font-Inter">
      {/* <main className="text-gray-400 bg-gray-900 body-font"> */}
        <Navbar />
        {/* <Sandbox /> */}
        <About />
        <Services />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
    </ParallaxProvider>
  );
}

export default App;