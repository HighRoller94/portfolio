import React, { useEffect, useRef } from 'react';
import Aos from 'aos';

import me from '../assets/me.svg';

import "aos/dist/aos.css";
import '../styles/styles.scss';

function About() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="about__section" id="about">
            <div data-aos="fade-right" data-aos-duration="2000" className="about__header">
                <h1>ABOUT.</h1>
            </div>
            <div data-aos="fade-right" className="about__text">
                <p>
                    Hey there, I'm Ash, a front-end developer based in the UK. I have a background in visual communications, and 
                    more recently turned my attention to web coding, where I quickly found my passion.
                </p>
                <p>
                    I'm always eager to learn new skills, and enjoy spending my time learning new ways to bring designs to life with HTML, CSS and JS!
                </p>
            </div>
            <img data-aos="fade-left" src={me} alt="" />
        </div>
    )
}

export default About
