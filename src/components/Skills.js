import React, { useEffect } from 'react';
import Aos from 'aos';

import web__development from '../assets/web__development.svg';
import uiux__design from '../assets/uiux__design.svg';
import graphic__design from '../assets/graphic__design.svg';

import html from '../assets/logos/html.svg';
import css from '../assets/logos/css.svg';
import react from '../assets/logos/react.svg';
import javascript from '../assets/logos/javascript.svg';
import sass from '../assets/logos/sass.svg';

import xd from '../assets/logos/xd.svg';
import figma from '../assets/logos/figma.svg';
import penandpaper from '../assets/logos/penandpaper.svg';
import sketch from '../assets/logos/sketch.svg';

import illustrator from '../assets/logos/illustrator.svg';
import photoshop from '../assets/logos/photoshop.svg';
import indesign from '../assets/logos/indesign.svg';

import "aos/dist/aos.css";

function Skills() {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <div className="skills__section" id="skills">
            <h1 className="bg__skills">Design</h1>
            <div className="skills__header" data-aos="fade-right">
                <h1>SKILLS.</h1>
                <p>Here are a few skills I've picked up along the way...</p>
            </div>
            <div className="skills__grid">
                <div className="skills__web" data-aos="fade-up">
                    <img className="web__icon" src={web__development} alt="web" />
                    <div className="web__header">
                        <h2>Web Development</h2>
                        <p>I love coding from scratch and creating something new</p>
                    </div>
                    <div className="web__toolsContainer">
                        <h3>Languages I speak:</h3>
                        <div className="web__tools">
                            <div className="tool">
                                <img className="icon" src={html} alt=""/>
                                <h2>HTML</h2>
                            </div>
                            <div className="tool">
                                <img className="js__icon" src={javascript} alt=""/>
                                <h2>JS</h2>
                            </div>
                            <div className="tool">
                                <img className="icon" src={css} alt=""/>
                                <h2>CSS</h2>
                            </div>
                            <div className="tool">
                                <img className="icon" src={react} alt=""/>
                                <h2>React</h2>
                            </div>
                            <div className="tool">
                                <img className="icon" src={sass} alt=""/>
                                <h2>Sass</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills__ui" data-aos="fade-up" data-aos-delay="200">
                    <img className="ui__icon" src={uiux__design} alt="web" />
                    <div className="ui__header">
                        <h2>UI/UX Design</h2>
                        <p>Clean and modern design patterns are what I've really come to appreciate</p>
                    </div>
                    <div className="ui__toolsContainer">
                        <h3>Design tools:</h3>
                        <div className="ui__tools">
                            <div className="tool">
                                <img className="icon" src={xd} alt=""/>
                                <h2>Adobe XD</h2>
                            </div>
                            <div className="tool">
                                <img className="icon" src={figma} alt=""/>
                                <h2>Figma</h2>
                            </div>
                            <div className="tool">
                                <img className="icon" src={penandpaper} alt=""/>
                                <h2>Pen & Paper</h2>
                            </div>
                            <div className="tool">
                                <img className="icon" src={sketch} alt=""/>
                                <h2>Sketch</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills__design" data-aos="fade-up" data-aos-delay="400">
                    <img className="gd__icon" src={graphic__design} alt="web" />
                    <div className="gd__header">
                        <h2>Graphic Design</h2>
                        <p>I've also been known to dabble with design in a few different ways</p>
                    </div>
                    <div className="gd__toolsContainer">
                        <h3>Tools I've used:</h3>
                        <div className="gd__tools">
                            <div className="tool">
                                <img className="icon" src={illustrator} alt=""/>
                                <h2>Illustrator</h2>
                            </div>
                            <div className="tool">
                                <img className="icon" src={photoshop} alt=""/>
                                <h2>Photoshop</h2>
                            </div>
                            <div className="tool">
                                <img className="icon" src={indesign} alt=""/>
                                <h2>InDesign</h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills
