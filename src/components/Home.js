import React from 'react';

import "aos/dist/aos.css";
import '../styles/styles.scss';

function Home() {
    return (
        <div className="hero__section" id="home">
            <div className="hero__text">
                <h2>Hey,</h2>
                <h1 data-aos="fade-up">I'M ASH.</h1>
                <div className="wrapper">
                    <h3 data-aos="fade-up" data-aos-duration="2000">A</h3>
                    <ul data-aos="fade-up" data-aos-duration="2000" className="dynamic__text">
                        <li><span>web developer</span></li>
                        <li><span>visual creative</span></li>
                    </ul>
                    <h3 data-aos="fade-up" data-aos-duration="2000">based in the UK!</h3>
                </div>
                <div data-aos="fade-up" data-aos-duration="2000" className="download__btn fade focus">
                    <button className="link">
                        <a className="link" href="cv/Ash-Bridges-CV.pdf" target="_blank">
                            Download CV!
                        </a>
                    </button>
                </div>
                <div className="scroll__btn">
                    <div className="mouse">
                        <div className="scroller"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
