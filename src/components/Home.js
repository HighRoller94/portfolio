import React from 'react';
import { motion } from 'framer-motion'
import TypeAnimation from 'react-type-animation';

import '../styles/styles.scss';

function Home() {

    return (
        <div className="hero__section" id="home">
            <div className="hero__text">
                <motion.h2 initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 1 }}>
                Hey,
                </motion.h2>
                <motion.h1 initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: 1, duration: 1 }}
                >
                    I'm Ash.
                </motion.h1>
                <motion.div className="wrapper" 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: 2, duration: 1 }}>
                    <div className="wrapper__text">
                        <h3 data-aos="fade-up" data-aos-duration="2000">A</h3>
                        <TypeAnimation 
                            data-aos="fade-up" 
                            data-aos-duration="2000" 
                            className="dynamic__text"
                            cursor={true}
                            sequence={[
                                'web developer',
                                5000,
                                'visual creative',
                                5000
                            ]}
                            wrapper="h2"
                            repeat={Infinity}
                        />
                    </div>
                    <h3 data-aos="fade-up" data-aos-duration="2000">based in the UK.</h3>
                </motion.div>
                <motion.div className="download__btn fade focus" 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: 4, duration: 1.5 }}>
                    <button className="link">
                        <a className="link" href="cv/Ash-Bridges-CV.pdf" target="_blank">
                            Download CV
                        </a>
                    </button>
                </motion.div>
                <motion.div className="scroll__btn" 
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: 3, duration: 1.5 }}>
                    <div className="mouse">
                        <div className="scroller"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Home
