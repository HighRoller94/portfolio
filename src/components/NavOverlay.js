import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-scroll'

import '../styles/styles.scss';

const svgVariants = {
    hidden: { rotate: -180 },
    visible: {
        rotate: 0,
        transition: { duration: 1 }
    }
}

const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0,
        pathSpacing: 0,
        strokeDasharray: 0,
        pathOffset: 0
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        pathSpacing: 1,
        pathOffset: 1,
        strokeDasharray: 15,
        transition: {
            duration: 2,
            ease: "easeInOut",
        }
    }
}

function NavOverlay() {
    const [downloaded, setDownloaded] = useState(false);

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
          const delay = 1 + i * 0.5;
            return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        } ;
    }
    };

    const toggle = () => {
        setDownloaded(true)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: 'smooth'
        });
    }

    useEffect(() => {
        const menu = document.querySelector(".navbar__toggle");
        const navMenu = document.querySelector(".navbar__menu");
        menu.addEventListener("click", () => {
            menu.classList.toggle('active')
            navMenu.classList.toggle('active')
        })
    }, [])

    return (
        <div className="overlay">
            <div className="navbar">
                <svg className="nav__logo focus" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 519.3 519.3">
                    <path d="M368.7,313.67H252.51l-24.7,68.12h-7.69L307.27,142h6.67l86.81,239.8h-7.68Zm-2.34-6.32L310.6,153.22,254.84,307.35Z" transform="translate(-127.06 -18.3)" fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="4"/>
                    <path d="M532.57,278.08a57.49,57.49,0,0,1,15.11,39.68q0,28.26-20.51,46.15t-59.73,17.88H394.77V142h72.67q37.8,0,56.13,16.19t18.36,42.41q0,23.83-13.5,38.14a62,62,0,0,1-33.64,18.39A64.82,64.82,0,0,1,532.57,278.08ZM402,253.71h67.65q31.63,0,48.38-14.12t16.74-39q0-23.85-16.55-37.81t-50.74-14H402ZM521.23,359.65q19.26-15.34,19.25-41.89,0-26.25-19.78-41.74t-54-15.49H402V375h65.48Q502,375,521.23,359.65Z" transform="translate(-127.06 -18.3)" fill="currentColor" stroke="currentColor" stroke-miterlimit="10" stroke-width="4"/>
                </svg>
                <div className="nav__icons">
                    <DarkModeToggle />
                    <div className="navbar__toggle focus">
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                    </div>
                </div>
                <div className="navbar__menu">
                    <h1 onClick={scrollToTop} >HOME</h1>
                    <Link to="about"><h1>ABOUT</h1></Link>
                    <Link to="projects"><h1>PROJECTS</h1></Link>
                    <Link to="contact"><h1>CONTACT</h1></Link>
                </div>
            </div>
        <div className="socials">
                <a className="link" href="https://www.linkedin.com/in/ash-bridges/" target="_blank" >
                    <LinkedInIcon className="linked__icon focus" />
                </a>
                <a className="link" href="https://github.com/HighRoller94" target="_blank" >
                    <GitHubIcon className="git__icon focus" />
                </a>
                <p className="socials__header">socials</p>
                <span className="bar"></span>
            </div>
            <a onClick={toggle} className="link" href="cv/Ash-Bridges-CV.pdf" download >
                {downloaded ? (
                    <svg className="download__icon focus" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26.4 20.1">
                        <path id="Icon_material-done" fill="currentColor" data-name="Icon material-done" d="M13.5,24.3,7.2,18,6.075,19.125,5.1,20.1l8.4,8.4,18-18L29.4,8.4Z" transform="translate(-5.1 -8.4)"/>
                    </svg>               
                ) : (
                    <svg className="download__icon focus" xmlns="http://www.w3.org/2000/svg" width="40.516" height="50.516" viewBox="0 0 50.516 50.516">
                        <g id="Icon_feather-download" data-name="Icon feather-download" transform="translate(-1.5 -1.5)">
                            <path id="Path_26" data-name="Path 26" d="M49.016,22.5v9.892a4.946,4.946,0,0,1-4.946,4.946H9.446A4.946,4.946,0,0,1,4.5,32.392V22.5" transform="translate(0 11.677)" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="3"/>
                            <path id="Path_27" data-name="Path 27" d="M10.5,15,22.865,27.365,35.231,15" transform="translate(3.892 6.812)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                            <path id="Path_28" data-name="Path 28" d="M18,34.177V4.5" transform="translate(8.758)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                        </g>
                    </svg>
                )}
            </a>
        </div>
    )
}

export default NavOverlay
