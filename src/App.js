import React, { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import NavOverlay from './components/NavOverlay';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

import './styles/styles.scss';

function App() {

  useEffect(() => {

    const cursor = document.querySelector(".cursor");
    const focus = document.querySelectorAll(".focus")
    document.addEventListener('mousemove', e => {
      cursor.setAttribute("style", "top: "+(e.clientY - 15)+"px; left: "+(e.clientX - 15)+"px;")
    });
    focus.forEach(link => {
      link.addEventListener('mouseover', () => {
        cursor.classList.add('link-focus')
      })
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('link-focus')
      })
    })
  });

  console.log(document.body.clientHeight)
  return (
    <div>
      <div className="cursor"></div>
      <div className="border"></div>
      <AnimatePresence exitBeforeEnter>
          <NavOverlay />
            <div className="container" data-scroll-container>
              <Home />
              <About  />
              <Projects />
              <Skills />
              <Contact />
            </div>
            <Footer />
      </AnimatePresence>
      </div>
  );
}

export default App;
