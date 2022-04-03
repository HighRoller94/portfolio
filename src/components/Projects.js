import React, { useEffect, useState } from 'react';
import Aos from 'aos';

import MarquetModal from './MarquetModal';
import EatzModal from './EatzModal';
import PyreModal from './PyreModal';
import IllumeModal from './IllumeModal';
import TravelModal from './TravelModal';

import travel from '../assets/travel.svg';
import chef from '../assets/chef.svg';
import shop from '../assets/shop.svg';
import pyre from '../assets/pyre.svg';
import illume from '../assets/illume.svg';

import "aos/dist/aos.css";
import '../styles/styles.scss'

function Projects() {
    const [openTravel, setOpenTravel] = useState(null);
    const [openMarquet, setOpenMarquet] = useState(null);
    const [openEatz, setOpenEatz] = useState(null);
    const [openPyre, setOpenPyre] = useState(null);
    const [openIllume, setOpenIllume] = useState(null);

    useEffect(() => {
        Aos.init({ duration: 5000 });
    }, []);

    return (
        <div>
            <div className="projects__section" id="projects">
            <div className="projects__header" data-aos="fade-right" >
                <h1 data-aos="fade-right">My main bits.</h1>
                <p data-aos="fade-right" >Check out some of the <strong>projects</strong> I've been working on recently!</p>
            </div>
            <div className="projects"  data-aos="fade-up">
                    <div className="project focus" onClick={() => { setOpenTravel(true) }}>
                        <img src={travel} al="Travel" />
                        <h1>Travair</h1>
                        <p>Responsive single page travel website/landing page</p>
                    </div>
                    <div className="project focus" onClick={() => { setOpenMarquet(true) }}>
                        <img src={shop} alt="Market" />
                        <h1>Marquet</h1>
                        <p>Multipage ecommerce marketplace with cart</p>
                    </div>
                    <div className="project focus" onClick={() => { setOpenEatz(true) }}>
                        <img src={chef} alt="Chef" />
                        <h1>Eatz</h1>
                        <p>Blog-type recipe app connected to an external API</p>
                    </div>
                    <div className="project focus" onClick={() => { setOpenPyre(true) }}>
                        <img src={pyre} alt="Pyre" />
                        <h1>Pyre</h1>
                        <p>Music player app with a simple dashboard layout</p>
                    </div>
                    <div className="project focus" onClick={() => { setOpenIllume(true) }}> 
                        <img src={illume} alt="Illume" />
                        <h1>Illume</h1>
                        <p>Social media app aimed at helping creatives</p>
                    </div>
            </div>
        </div>
        {openTravel && <TravelModal openTravel={openTravel} setOpenTravel={setOpenTravel} /> }
        {openMarquet && <MarquetModal openMarquet={openMarquet} setOpenMarquet={setOpenMarquet} /> }
        {openEatz && <EatzModal openEatz={openEatz} setOpenEatz={setOpenEatz} /> }
        {openPyre && <PyreModal openPyre={openPyre} setOpenPyre={setOpenPyre} /> }
        {openIllume && <IllumeModal openIllume={openIllume} setOpenIllume={setOpenIllume} /> }
        </div>
    )
}

export default Projects
