import React from 'react';
import { motion } from 'framer-motion';

import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import pyreLogo from '../assets/projectLogos/pyreLogo.png';
import "aos/dist/aos.css";
import '../styles/styles.scss';


function IllumeModal({ openIllume, setOpenIllume }) {

    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpenIllume(false)
        }
    };

    return (
        <motion.div className="backdrop" onClick={handleClose}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: .3}}
        >
            <div className="illume__modal">
                    <div className="illume__info">
                        <div className="illume__header">
                            <h1>Illume</h1>
                            <img src={pyreLogo} alt="" />
                        </div>
                        <div className="illume__text">
                            <p>Music player app with a simple dashboard layout. Built with HTML, SASS and React, Pyre uses the Spotify API to allows users to login, listen and manage their media.</p>
                            <h3>Packages used -</h3>
                            <ul className="packages">
                                <li>SASS</li>
                                <li>Axios</li>
                                <li>Framer-Motion</li>
                                <li>React Router</li>
                                <li>Spotify Web API Node</li>
                                <li>React Spotify Web Playback</li>
                            </ul>
                        </div>
                        <div className="illume__buttons">
                            <a href="https://github.com/HighRoller94/illume-app" target="_blank">
                                <button className="focus"><GitHubIcon className="icon" />View Code</button>
                            </a>
                            <a href="https://illume-68c8e.web.app/illume" target="_blank">
                                <button className="focus"><LanguageIcon className="icon" />Live Site</button>
                            </a>
                        </div>
                    </div>
                <div className="illume__images">

                </div>
            </div>
        </motion.div>
    )
}

export default IllumeModal
