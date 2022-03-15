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
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div>
            <div className="projects__section" id="projects">
            <div className="projects__header" data-aos="fade-right" data-aos-anchor-placement="top-center"  >
                <h1 data-aos="fade-right">PORTFOLIO.</h1>
                <p data-aos="fade-right" data-aos-delay="200" >Check out some of the <strong>projects</strong> I've been working on...</p>
            </div>
            <div className="projects" data-aos="fade-up">
                    <div className="project">
                        <img src={travel} al="Travel" />
                        <h1>Travair</h1>
                        <p>Responsive single page travel website/landing page</p>
                        <button className="focus" onClick={() => { setOpenTravel(true) }}>View</button>
                    </div>
                    <div className="project">
                        <img src={shop} alt="Market" />
                        <h1>Marquet</h1>
                        <p>Multipage ecommerce marketplace with cart</p>
                        <button className="focus" onClick={() => { setOpenMarquet(true) }}>View</button>
                    </div>
                    <div className="project">
                        <img src={chef} alt="Chef" />
                        <h1>Eatz</h1>
                        <p>Blog-type recipe app connected to an external API</p>
                        <button className="focus" onClick={() => { setOpenEatz(true) }}>View</button>
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
        {openTravel && <TravelModal openTravel={openTravel} setOpenTravel={setOpenTravel} /> }
        {openMarquet && <MarquetModal openMarquet={openMarquet} setOpenMarquet={setOpenMarquet} /> }
        {openEatz && <EatzModal openEatz={openEatz} setOpenEatz={setOpenEatz} /> }
        {openPyre && <PyreModal openPyre={openPyre} setOpenPyre={setOpenPyre} /> }
        {openIllume && <IllumeModal openIllume={openIllume} setOpenIllume={setOpenIllume} /> }
        </div>
    )
}

export default Projects
