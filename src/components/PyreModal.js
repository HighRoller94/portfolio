import React, { useEffect} from 'react';
import Aos from 'aos';
import { motion } from 'framer-motion';

import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

import pyre1 from '../assets/pyre1.svg';
import pyre2 from '../assets/pyre2.svg';
import pyreLogo from '../assets/pyreLogo.png';

import "aos/dist/aos.css";
import '../styles/styles.scss';


function PyreModal({ openPyre, setOpenPyre }) {

    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpenPyre(false)
        }
    };

    return (
        <motion.div className="backdrop" onClick={handleClose}
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: .3}}
        >
            <div className="pyre__modal">
                    <div className="pyre__info">
                        <div className="pyre__header">
                            <h1>PYRE</h1>
                            <img src={pyreLogo} alt="" />
                        </div>
                        <div className="pyre__text">
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
                        <div className="pyre__buttons">
                            <a href="https://github.com/HighRoller94/pyre" target="_blank">
                                <button className="focus"><GitHubIcon className="icon" />View Code</button>
                            </a>
                            <a href="https://pyre-2e47e.web.app/" target="_blank">
                                <button className="focus"><LanguageIcon className="icon" />Live Site</button>
                            </a>
                        </div>
                    </div>
                <div className="pyre__images">
                    <img className="pyre__1" src={pyre1} alt="" />
                    <img className="pyre__2" src={pyre2} alt="" />
                </div>
            </div>
        </motion.div>
    )
}

export default PyreModal
