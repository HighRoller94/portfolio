import React, { useEffect } from 'react';
import Aos from 'aos';
import { motion } from 'framer-motion';

import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import CloseIcon from '@material-ui/icons/Close';

import pyre1 from '../assets/pyre1.svg';
import pyre2 from '../assets/pyre2.svg';
import pyreLogo from '../assets/projectLogos/pyreLogo.png';

import "aos/dist/aos.css";
import '../styles/styles.scss';


function PyreModal({ openPyre, setOpenPyre }) {

    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpenPyre(false)
        }
    };

    const closePyre = () => {
        setOpenPyre(false)
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
                setOpenPyre(false)
            }
        }
        window.addEventListener('keydown', close)
    })

    return (
        <motion.div className="backdrop" onClick={handleClose}
            key="box"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: .3, ease: "easeOut"}}
        >
            <div className="pyre__modal">
                <button className="btn__close focus" onClick={closePyre} ><CloseIcon className="close__icon"/></button>
                <div className="pyre__info">
                    <div className="pyre__header">
                        <h1>Pyre</h1>
                        <img src={pyreLogo} alt="" />
                    </div>
                    <div className="pyre__text">
                        <p>Music player app with a simple dashboard layout. Built with HTML, SASS and React, Pyre uses the Spotify API to allows users to login, listen to and manage their media.</p>
                        <img className="pyre__1" src={pyre1} alt="" />
                        <h3>Libaries used -</h3>
                        <ul className="packages">
                            <li>Axios</li>
                            <li>Framer-Motion</li>
                            <li>React Router</li>
                            <li>Spotify Web API Node</li>
                            <li>React Spotify Web Playback</li>
                        </ul>
                        <img className="pyre__2" src={pyre2} alt="" />
                    </div>
                    <div className="pyre__buttons">
                        <a className="focus" href="https://github.com/HighRoller94/pyre" target="_blank">
                            <button className="focus"><GitHubIcon className="icon" />View Code</button>
                        </a>
                        <a className="focus" href="https://pyre-2e47e.web.app/" target="_blank">
                            <button className="focus"><LanguageIcon className="icon" />Live Site</button>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default PyreModal
