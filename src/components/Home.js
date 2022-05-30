import React from 'react';
import { motion } from 'framer-motion'

import lightsOut from '../assets/lightsOut.svg';

import '../styles/styles.scss';

function Home() {

    const pathVariants = {
        hidden: {
            opacity: 0,
            pathLength: 0
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            transition: {
                duration: 1,
                delay: 5,
                ease: "easeInOut"
            }
        }
    }
    
    return (
        <div className="hero__section" data-scroll-section id="home">
            <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: 3, duration: 1 }}
                className="hit__lightsDiv">
                <img className="lights" src={lightsOut} alt="" />
                <motion.svg initial="hidden" animate="visible"  className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.7 197.96">
                    <motion.path variants={pathVariants} fill="none" stroke="#1d1d1b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5" class="b" d="M22.97,196.46s109.72-13.35,121.91-75.51" />
                    <motion.path variants={pathVariants} fill="none" stroke="#1d1d1b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5" class="b" d="M122.32,130.36c7.74-2.61,24.72-22.19,24.72-22.19"/> 
                    <motion.path variants={pathVariants} fill="none" stroke="#1d1d1b" stroke-linecap="round" stroke-miterlimit="10" stroke-width="5" class="b" d="M159.2,135.65c-.24,1.03-12.37-24.21-11.9-27.89"/>
                </motion.svg>
            </motion.div>
            <div className="hero__text">
                <motion.h2 initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: .2, duration: 1 }}>
                        Hey!
                        </motion.h2>
                <div className="swipe__text">
                    <h1>I'm Ash</h1>
                </div>
                <div className="swipe__text secondary" >
                    <h3>A <span>web developer</span> based in the UK.</h3>
                </div>
                <motion.div 
                    className="download__btn fade focus" 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: 2.5, duration: 1 }}>
                    <button className="link">
                        <a className="link" href="cv/Ash-Bridges-CV.pdf" target="_blank">
                            Download CV!
                        </a>
                    </button>
                </motion.div>
                <motion.div 
                    className="scroll__btn" 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ delay: 2.5, duration: 1 }}>
                    <div className="mouse">
                        <div className="scroller"></div>
                    </div>
                </motion.div>
            </div>
            
        </div>
    )
}

export default Home
