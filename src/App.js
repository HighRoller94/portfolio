import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import NavOverlay from './components/NavOverlay';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

import './styles/styles.scss';

function App() {
  const [project, setProject] = useState(null);
  
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

  return (
    <Router>
      <motion.div 
        className="app"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
        exit={{ opacity: 0}}
      >
      <div className="cursor"></div>
      <div className="border"></div>
          <AnimatePresence exitBeforeEnter>
            <Switch>
              <Route path="/">
                <NavOverlay />
                <Home />
                <About  />
                <Projects setProject={setProject}/>
                <Skills />
                <Contact />
                <Footer />
              </Route>
            </Switch>
          </AnimatePresence>
      </motion.div>
    </Router>
  );
}

export default App;
