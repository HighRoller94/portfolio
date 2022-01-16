import React, { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';

import Project from './Project';

import travel from '../assets/travel.svg';




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
                <h1>PORTFOLIO.</h1>
            </div>
            <div className="projects">
                <Project 
                    title="Travel"
                    desc="Air travel website built with HTML, SASS and JS."
                    image={travel}
                />
                <Project 
                    title="Shop"
                    desc="Air travel website built with HTML, SASS and JS."
                    image={travel}
                />
                <Project 
                    title="Chef"
                    desc="Air travel website built with HTML, SASS and JS."
                    image={travel}
                />
                <Project 
                    title="Pyre"
                    desc="Air travel website built with HTML, SASS and JS."
                    image={travel}
                />
                <Project 
                    title="Illume"
                    desc="Air travel website built with HTML, SASS and JS."
                    image={travel}
                />

            </div>
            <div className="more__header focus">
                <h1>MORE</h1> 
                <ChevronRight className="project__arrow" />
            </div>
        </div>
    )
}

export default Projects
