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
            <h1 className="bg-about">About</h1>
            <div className="about__container">
                <h1 data-aos="fade-right" className="about__header">A little about me.</h1>
                <div className="about__text">
                    <p data-aos="fade-right" data-aos-delay="200">
                    Hey there, I'm Ash, a <strong>front-end developer</strong> from the UK. I have a background in visual communications, and have recently turned to web coding, where I quickly found my passion. <br /><br />I'm always eager to learn new skills, and enjoy spending my time learning new ways to bring designs to life (I know right? As if you havn't heard that one before).
                    </p>
                    <img data-aos="fade-left" data-aos-duration="1000" src={me} alt="" />
                </div>
            </div>
            <h1 className="bg-about2">About</h1>
        </div>
    )
}

export default About
