import React from 'react';
import { motion } from 'framer-motion';

import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import marquetLogo from '../assets/projectLogos/marquetLogo.png';
import "aos/dist/aos.css";
import '../styles/styles.scss';


function MarquetModal({ openMarquet, setOpenMarquet }) {

    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpenMarquet(false)
        }
    };

    return (
        <motion.div className="backdrop" onClick={handleClose}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: .3}}
        >
            <div className="marquet__modal">
                    <div className="marquet__info">
                        <div className="marquet__header">
                            <h1>Marquet</h1>
                            <img src={marquetLogo} alt="" />
                        </div>
                        <div className="marquet__text">
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
                        <div className="marquet__buttons">
                            <a href="https://github.com/HighRoller94/marquet-ecommerce" target="_blank">
                                <button className="focus"><GitHubIcon className="icon" />View Code</button>
                            </a>
                            <a href="https://marquet-ecommerce.web.app/" target="_blank">
                                <button className="focus"><LanguageIcon className="icon" />Live Site</button>
                            </a>
                        </div>
                    </div>
                <div className="marquet__images">

                </div>
            </div>
        </motion.div>
    )
}

export default MarquetModal
