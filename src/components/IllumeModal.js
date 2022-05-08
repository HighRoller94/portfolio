import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import CloseIcon from '@material-ui/icons/Close';

import illumeLogo from '../assets/projectLogos/illumeLogo.png';

import "aos/dist/aos.css";
import '../styles/styles.scss';


function IllumeModal({ openIllume, setOpenIllume }) {

    const handleClose = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setOpenIllume(false)
        }
    };

    const closeIllume = () => {
        setOpenIllume(false)
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
                setOpenIllume(false)
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
            <div className="illume__modal">
                <button className="btn__close" onClick={closeIllume} ><CloseIcon className="close__icon"/></button>
                <div className="illume__info">
                    <div className="illume__header">
                        <h1>Illume</h1>
                        <img src={illumeLogo} alt="" />
                    </div>
                    <div className="illume__text">
                        <p>Illume is a CRUD social media app that aims to help creatives network, grow and manage their business and portfolios. Built with React, Illume includes a number of features such as custom authentication, user based profiles and cart functionality.</p>
                        <img className="illume__1" src="" alt="" />
                        <h3>Libaries used -</h3>
                        <ul className="packages">
                            <li>Axios</li>
                            <li>Firebase and firebase-functions</li>
                            <li>React Router Dom</li>
                            <li>React Player</li>
                            <li>Query String</li>
                            <li>Framer Motion</li>
                            <li>React-Masonry-CSS</li>
                        </ul>
                        <img className="illume__2" src="" alt="" />
                    </div>
                    <div className="illume__buttons">
                        <a href="https://github.com/HighRoller94/illume-app" target="_blank">
                            <button className="focus"><GitHubIcon className="icon" />View Code</button>
                        </a>
                        <a href="https://illume-68c8e.web.app/home" target="_blank">
                            <button className="focus"><LanguageIcon className="icon" />Live Site</button>
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default IllumeModal
