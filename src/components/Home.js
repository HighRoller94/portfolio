import React from 'react'
import Aos from 'aos';

import "aos/dist/aos.css";
import '../styles/styles.scss'

function Home() {
    
    return (
        <div className="hero__section">
            <div className="hero__intro">
                <div className="hero__text">
                    <h2 data-aos="fade-right">Hey</h2>
                    <h1 data-aos="fade-right">I'M <span>ASH.</span></h1>
                    <h3 data-aos="fade-right" data-aos-duration="2000">A front-end developer based in the UK.</h3>
                </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className="download__btn focus">
                        <a className="link" href="cv/Ash-Bridges-CV.pdf" target="_blank">
                            <button className="link">Download CV</button>
                        </a>
                    </div>
            </div>
            <p>[scroll]</p>
        </div>
    )
}

export default Home
