import React from 'react';
import { motion } from 'framer-motion'

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
                duration: 2,
                ease: "easeInOut"
            }
        }
    }
    
    return (
        <div className="hero__section" data-scroll-section id="home">
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
