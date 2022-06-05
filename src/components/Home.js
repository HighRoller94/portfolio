import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

import lightsOut from '../assets/lightsOut.svg';

import '../styles/styles.scss';

function Home() {
    const [downloaded, setDownloaded] = useState(false);

    const toggle = () => {
        const download = document.querySelector('.download__btn');
        download.classList.add('clicked');
        setDownloaded(true)
    }

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
    
    useEffect(() => {
        const download = document.querySelector('.download__btn');
        const downloadMorph = () => {
            download.classList.toggle('active', window.scrollY > 500);
        }

        window.addEventListener("scroll", downloadMorph);
    })
    
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
                        Hey,
                        </motion.h2>
                <div className="swipe__text">
                    <h1>I'm Ash!</h1>
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
                        <a className="span link" href="cv/Ash-Bridges-CV.pdf" onClick={toggle} target="_blank">
                            Download CV!
                        </a>
                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="26.4" height="20.1" viewBox="0 0 26.4 20.1">
                            <path fill="currentColor" id="Icon_material-done" data-name="Icon material-done" d="M13.5,24.3,7.2,18,6.075,19.125,5.1,20.1l8.4,8.4,18-18L29.4,8.4Z" transform="translate(-5.1 -8.4)"/>
                        </svg>
                        <a className="download link" href="cv/Ash-Bridges-CV.pdf" onClick={toggle} target="_blank">
                            <svg className="icon" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor" id="Icon_awesome-download" data-name="Icon awesome-download" d="M11.834,0h4.383a1.312,1.312,0,0,1,1.315,1.315v9.2h4.8a1.094,1.094,0,0,1,.772,1.868l-8.333,8.338a1.061,1.061,0,0,1-1.5,0L4.936,12.387a1.094,1.094,0,0,1,.772-1.868h4.81v-9.2A1.312,1.312,0,0,1,11.834,0ZM28.05,20.6v6.136a1.312,1.312,0,0,1-1.315,1.315H1.315A1.312,1.312,0,0,1,0,26.735V20.6a1.312,1.312,0,0,1,1.315-1.315H9.352l2.684,2.684a2.807,2.807,0,0,0,3.977,0L18.7,19.284h8.037A1.312,1.312,0,0,1,28.05,20.6ZM21.256,25.42a1.1,1.1,0,1,0-1.1,1.1A1.1,1.1,0,0,0,21.256,25.42Zm3.506,0a1.1,1.1,0,1,0-1.1,1.1A1.1,1.1,0,0,0,24.763,25.42Z"/>
                            </svg>
                        </a>
                    </button>
                    <h2>Got it!</h2>
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
