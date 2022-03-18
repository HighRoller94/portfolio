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
            <div className="skills__header" >
                <h1 data-aos="fade-right">Skills.</h1>
                <p data-aos="fade-right" data-aos-delay="200">Here are a few <strong>skills</strong> I've picked up along the way.</p>
            </div>
            <div className="skills__container">
                <div className="skills__web" data-aos="fade-up">
                    <img className="web__icon" src={web__development} alt="web" />
                    <div className="web__header">
                        <h2>Web Development</h2>
                        <p>I love coding from scratch and creating new websites</p>
                    </div>
                    <div className="web__skills">
                        <h3>Languages I speak:</h3>
                        <div className="web__tools">
                            <div className="html">
                                <img className="html-icon" src={html} alt=""/>
                                <h2>HTML</h2>
                            </div>
                            <div className="javascript">
                                <img className="js-icon" src={javascript} alt=""/>
                                <h2>JS</h2>
                            </div>
                            <div className="css">
                                <img className="css-icon" src={css} alt=""/>
                                <h2>CSS</h2>
                            </div>
                            <div className="react">
                                <img className="react-icon" src={react} alt=""/>
                                <h2>React</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="bg__skills2">Design</h1>
                <div className="skills__ui" data-aos="fade-up" data-aos-delay="200">
                    <img className="ui__icon" src={uiux__design} alt="web" />
                    <div className="ui__header">
                        <h2>UI/UX Design</h2>
                        <p>Clean and modern design patterns are where I feel comfortable</p>
                    </div>
                    <div className="ui__skills">
                        <h3>Design tools:</h3>
                        <div className="ui__tools">
                            <div className="adobe-xd">
                                <img className="xd-icon" src={xd} alt=""/>
                                <h2>Adobe XD</h2>
                            </div>
                            <div className="figma">
                                <img className="figma-icon" src={figma} alt=""/>
                                <h2>Figma</h2>
                            </div>
                            <div className="paper">
                                <img className="paper-icon" src={penandpaper} alt=""/>
                                <h2>Pen & Paper</h2>
                            </div>
                            <div className="sketch">
                                <img className="sketch-icon" src={sketch} alt=""/>
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
                    <div className="gd__skills">
                        <h3>Tools I've used:</h3>
                        <div className="gd__tools">
                            <div className="illustrator">
                                <img className="illustrator-icon" src={illustrator} alt=""/>
                                <h2>Illustrator</h2>
                            </div>
                            <div className="photoshop">
                                <img className="photoshop-icon" src={photoshop} alt=""/>
                                <h2>Photoshop</h2>
                            </div>
                            <div className="indesign">
                                <img className="indesign-icon" src={indesign} alt=""/>
                                <h2>InDesign</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="bg__skills3">Design</h1>
            </div>
        </div>
    )
}

export default Skills
