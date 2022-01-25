import React, { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';

import Project from './Project';

import travel from '../assets/travel.svg';
import chef from '../assets/chef.svg';
import shop from '../assets/shop.svg';
import pyre from '../assets/pyre.svg';
import illume from '../assets/illume.svg';

import "aos/dist/aos.css";
import '../styles/styles.scss'

function Projects() {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className="projects__section" id="projects">
            <div className="projects__header" data-aos="fade-right" data-aos-anchor-placement="top-center"  >
                <h1>PORTFOLIO.</h1>
                <p>Check out some of the projects I've been working on...</p>
            </div>
            <div className="projects" data-aos-delay="200"  data-aos="fade-up">
                    <Project 
                        title="PRESTIGE"
                        desc="Single page travel website/landing page"
                        image={travel}
                    />
                    <Project 
                        title="Shop"
                        desc="Multipage ecommerce marketplace"
                        image={shop}
                    />
                    <Project 
                        title="Chef"
                        desc="Recipe search app connected to an API."
                        image={chef}
                    />
                    <Project 
                        title="Pyre"
                        desc="Music player app with a simple dashboard layout."
                        image={pyre}
                    />
                    <Project 
                    title="Illume"
                    desc="Social media app aimed at helping creatives"
                    image={illume}
                    />
            </div>
        </div>
    )
}

export default Projects
