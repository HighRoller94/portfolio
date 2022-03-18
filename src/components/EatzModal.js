import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import CloseIcon from '@material-ui/icons/Close';

import eatzLogo from '../assets/projectLogos/eatzLogo.png';

import "aos/dist/aos.css";
import '../styles/styles.scss';

function EatzModal({ openEatz, setOpenEatz }) {

    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpenEatz(false)
        }
    };
    
    const closeEatz = () => {
        setOpenEatz(false)
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
                setOpenEatz(false)
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
            <div className="eatz__modal">
            <button className="btn__close" onClick={closeEatz} ><CloseIcon className="close__icon"/></button>
                    <div className="eatz__info">
                        <div className="eatz__header">
                            <h1>Eatz</h1>
                            <img src={eatzLogo} alt="" />
                        </div>
                        <div className="eatz__text">
                            <p>React app connected to an external API, allowing users to search for different recipes! Includes pagination component and is fully responsive. Provides links to external sources. </p>
                            <img className="pyre__1" src="" alt="" />
                            <h3>Packages used -</h3>
                            <ul className="packages">
                                <li>Framer-Motion</li>
                                <li>React Router</li>
                            </ul>
                            <img className="pyre__2" src="" alt="" />
                        </div>
                        <div className="eatz__buttons">
                            <a href="https://github.com/HighRoller94/eatz-recipe-app" target="_blank">
                                <button className="focus"><GitHubIcon className="icon" />View Code</button>
                            </a>
                            <a href="https://recipe-app-bd949.web.app/" target="_blank">
                                <button className="focus"><LanguageIcon className="icon" />Live Site</button>
                            </a>
                        </div>
                    </div>
                <div className="eatz__images">
                    <img className="pyre__1" src="" alt="" />
                    <img className="pyre__2" src="" alt="" />
                </div>
            </div>
        </motion.div>
    )
}

export default EatzModal
