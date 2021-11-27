import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import NavOverlay from './components/NavOverlay';
import Cook from './components/Cook';
import Pyre from './components/Pyre';
import Travel from './components/Travel';
import Illume from './components/Illume';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
    document.addEventListener("scroll", () => {
      const scroll = document.querySelector('.download__icon', '.download__btn');
      scroll.classList.toggle('active', window.scrollY > 450)
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
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/travel">
            <NavOverlay />
            <Travel />
          </Route>
          <Route path="/cook">
            <NavOverlay />
            <Cook />
          </Route>
          <Route path="/pyre">
            <NavOverlay />
            <Pyre />
          </Route>
          <Route path="/illume">
            <NavOverlay />
            <Illume />
          </Route>
          <Route path="/">
            <NavOverlay />
            <Home />
            <About  />
            <Projects />
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
