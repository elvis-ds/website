// import logo from './logo.svg';
// import './App.css';

import React from 'react';

import { ParallaxProvider } from 'react-scroll-parallax';

import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Competencies from './components/Competencies';
import Testimonials from './components/Testimonials';




function App() {
  return (

    <ParallaxProvider>
      <main className="text-gray-400 /*bg-gray-900*/ body-font">
        <Navbar />
        <About />
        <Services />
        <Competencies />
        <Testimonials />
        <Contact />
      </main>
    </ParallaxProvider>
  );
}

export default App;
