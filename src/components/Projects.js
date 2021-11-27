import React, { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import "aos/dist/aos.css";
import '../styles/styles.scss'

function Projects() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="projects__section" id="projects">
            <div data-aos="fade-up" className="projects__header">
                <h1>PROJECTS.</h1>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000" className="projects">
                <Link to="/travel"  style={{ textDecoration: 'none', color: 'currentColor' }}>
                <div className="project focus" data-aos="fade-up" data-aos-duration="2000">
                    <div className="project__header">
                        <h1>TRAVEL</h1>
                        <ChevronRight className="project__arrow" />
                    </div>
                    <p>Simple travel website built with HTML, SASS and JS.</p>
                </div>
                </Link>
                <Link to="/cook"  style={{ textDecoration: 'none', color: 'currentColor' }}>
                <div className="project focus" data-aos="fade-up" data-aos-duration="2000">
                    <div className="project__header">
                        <ChevronLeft className="project__arrow" />
                        <h1>COOK</h1>
                    </div>
                    <p>Recipe search site connected to an external API. Built with React and SASS</p>
                </div>
                </Link>
                <Link to="/pyre"  style={{ textDecoration: 'none', color: 'currentColor' }}>
                <div className="project focus" data-aos="fade-up" data-aos-duration="2000">
                    <div className="project__header">
                        <h1>PYRE</h1>
                        <ChevronRight className="project__arrow" />
                    </div>
                    <p>Professional music player app with a simple dashboard layout. Built with React and SASS.</p>
                </div>
                </Link>
                <Link to="/illume"  style={{ textDecoration: 'none', color: 'currentColor' }}>
                <div className="project focus" data-aos="fade-up" data-aos-duration="2000">
                    <div className="project__header">
                        <ChevronLeft className="project__arrow" />
                        <h1>ILLUME</h1>
                    </div>
                    <p>Social media website aimed at helping creatives, freelancers and small businesses grow and manage their businesses.</p>
                </div>
                </Link>
            </div>
            <div className="more__header focus">
                <h1>MORE</h1> 
                <ChevronRight className="project__arrow" />
            </div>
        </div>
    )
}

export default Projects
