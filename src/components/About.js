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
            <div className="about__text">
                <h1 className="about__header">ABOUT.</h1>
                <p>
                    Hey there, I'm Ash, a front-end developer from the UK. I have a background in visual communications, and have recently turned my attention to web coding, where I quickly found my passion. <br /><br />I'm always eager to learn, and enjoy spending my time learning new ways to bring designs to life.
                </p>
            </div>
            <h1 className="bg-about2">About</h1>
            <img src={me} alt="" />
        </div>
    )
}

export default About
