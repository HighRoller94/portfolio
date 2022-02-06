import React from 'react';

import "aos/dist/aos.css";
import '../styles/styles.scss';

function Home() {
    return (
        <div className="hero__section" id="home">
            <div className="hero__text">
                <h2>Hey</h2>
                <h1 data-aos="fade-right">I'M ASH</h1>
                <div className="wrapper">
                    <h3 data-aos="fade-right" data-aos-duration="2000">A</h3>
                    <ul data-aos="fade-right" data-aos-duration="2000" className="dynamic__text">
                        <li><span>web developer</span></li>
                        <li><span>visual creative</span></li>
                    </ul>
                    <h3 data-aos="fade-right" data-aos-duration="2000">based in the UK</h3>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className="download__btn fade focus">
                    <button className="link">
                        <a className="link" href="cv/Ash-Bridges-CV.pdf" target="_blank">
                            Download CV
                        </a>
                    </button>
                </div>
                <div className="scroll__btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 52.182 52.182">
                        <path id="Icon_awesome-arrow-alt-circle-down" data-name="Icon awesome-arrow-alt-circle-down" d="M52.745,26.654A26.091,26.091,0,1,1,26.654.563,26.087,26.087,0,0,1,52.745,26.654Zm-30.72-12.2v12.2H14.565a1.263,1.263,0,0,0-.894,2.157L25.759,40.835a1.251,1.251,0,0,0,1.778,0L39.625,28.81a1.262,1.262,0,0,0-.894-2.157H31.283V14.45a1.266,1.266,0,0,0-1.262-1.262H23.287A1.266,1.266,0,0,0,22.025,14.45Z" transform="translate(-0.563 -0.563)" fill="#fff"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Home
