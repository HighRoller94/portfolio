import React, { useEffect, useState } from 'react';
import Aos from 'aos';

import PyreModal from './PyreModal';

import travel from '../assets/travel.svg';
import chef from '../assets/chef.svg';
import shop from '../assets/shop.svg';
import pyre from '../assets/pyre.svg';
import illume from '../assets/illume.svg';

import "aos/dist/aos.css";
import '../styles/styles.scss'

function Projects({ setProject }) {
    const [openPrestige, setOpenPrestige] = useState(null);
    const [openMarquet, setOpenMarquet] = useState(null);
    const [openChef, setOpenChef] = useState(null);
    const [openPyre, setOpenPyre] = useState(null);
    const [openIllume, setOpenIllume] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="projects__section" id="projects">
            <div className="projects__header" data-aos="fade-right" data-aos-anchor-placement="top-center"  >
                <h1 data-aos="fade-right" >PORTFOLIO.</h1>
                <p data-aos="fade-right" data-aos-delay="200" >Check out some of the projects I've been working on...</p>
            </div>
            <div className="projects" data-aos="fade-up">
                    <div className="project">
                        <img src={travel} alt="Prestige" />
                        <h1>Prestige</h1>
                        <p>Single page travel website/landing page</p>
                        <button className="focus" onClick={() => { setOpenPrestige(true) }}>View</button>
                    </div>
                    <div className="project">
                        <img src={shop} alt="Market" />
                        <h1>Marquet</h1>
                        <p>Multipage ecommerce marketplace</p>
                        <button className="focus" onClick={() => { setOpenMarquet(true) }}>View</button>
                    </div>
                    <div className="project">
                        <img src={chef} alt="Chef" />
                        <h1>Chef</h1>
                        <p>Recipe search app connected to an API</p>
                        <button className="focus" onClick={() => { setOpenChef(true) }}>View</button>
                    </div>
                    <div className="project">
                        <img src={pyre} alt="Pyre" />
                        <h1>Pyre</h1>
                        <p>Music player app with a simple dashboard layout</p>
                        <button className="focus" onClick={() => { setOpenPyre(true) }}>View</button>
                    </div>
                    <div className="project">
                        <img src={illume} alt="Illume" />
                        <h1>Illume</h1>
                        <p>Social media app aimed at helping creatives</p>
                        <button className="focus" onClick={() => { setOpenIllume(true) }}>View</button>
                    </div>
            </div>
        </div>
        {openPyre && <PyreModal openPyre={openPyre} setOpenPyre={setOpenPyre} /> }
        </div>
    )
}

export default Projects
