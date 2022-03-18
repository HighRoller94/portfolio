import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import CloseIcon from '@material-ui/icons/Close';

import travelLogo from '../assets/projectLogos/travelLogo.png';

import "aos/dist/aos.css";
import '../styles/styles.scss';


function TravelModal({ openTravel, setOpenTravel }) {

    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpenTravel(false)
        }
    };

    const closeTravel = () => {
        setOpenTravel(false)
    }

    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        const focus = document.querySelectorAll(".focus")

        focus.forEach(link => {
            link.addEventListener('mouseover', () => {
                cursor.classList.add('link-focus')
            })
            link.addEventListener('mouseleave', () => {
                cursor.classList.remove('link-focus')
            })
        })

        const close = (e) => {
            if(e.keyCode === 27){
                setOpenTravel(false)
            }
        }
        window.addEventListener('keydown', close)

    })

    return (
        <motion.div className="backdrop" onClick={handleClose}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: .3}}
        >
            <div className="travel__modal">
                <button className="btn__close" onClick={closeTravel} ><CloseIcon className="close__icon"/></button>
                <div className="travel__info">
                    <div className="travel__header">
                        <h1>Travair</h1>
                        <img src={travelLogo} alt="" />
                    </div>
                    <div className="travel__text">
                        <p>Music player app with a simple dashboard layout. Built with HTML, SASS and React, Pyre uses the Spotify API to allows users to login, listen and manage their media.</p>
                        <img className="Travel__1" src="" alt="" />
                        <h3>Libraries used -</h3>
                        <ul className="packages">
                            <li>Swiper JS</li>
                        </ul>
                        <img className="Travel__2" src="" alt="" />
                    </div>
                    <div className="travel__buttons">
                        <a href="https://github.com/HighRoller94/travel-landing" target="_blank">
                            <button className="focus"><GitHubIcon className="icon" />View Code</button>
                        </a>
                        <a href="https://prestige-travel-cf76a.web.app/" target="_blank">
                            <button className="focus"><LanguageIcon className="icon" />Live Site</button>
                        </a>
                    </div>
                </div>
                <div className="travel__images">
                <img className="Travel__1" src="" alt="" />
                <img className="Travel__2" src="" alt="" />
                </div>
            </div>
        </motion.div>
    )
}

export default TravelModal