import React, { useEffect, useRef } from 'react';

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

function NavOverlay() {

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
                <svg
                    className="nav__logo focus" 
                    onClick={scrollToTop} 
                    data-name="Layer 1" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 157.47 102.56">
                    <path
                        d="M633.73,317.33H583l-10.79,28.26h-3.34l38-99.49h2.92l37.86,99.49h-3.34Zm-1-2.62-24.32-63.95-24.33,63.95Z" 
                        transform="translate(-568.91 -243.04)" 
                        fill="currentColor"/>
                    <path 
                        d="M720.26,301.24a25.4,25.4,0,0,1,6.12,17q0,12.09-8.31,19.74t-24.17,7.64H664.46V243H693.9q15.29,0,22.72,6.92T724,268.1q0,10.2-5.46,16.31A24.76,24.76,0,0,1,705,292.28,25.83,25.83,0,0,1,720.26,301.24Zm-52.88-10.42h27.38q12.82,0,19.6-6t6.78-16.68q0-10.2-6.71-16.17t-20.53-6H667.38Zm48.29,45.31q7.8-6.57,7.79-17.92t-8-17.85q-8-6.63-21.85-6.63H667.38v48.95H693.9Q707.87,342.68,715.67,336.13Z" 
                        transform="translate(-568.91 -243.04)" 
                        fill="currentColor"/>
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
            <a className="link" href="cv/Ash-Bridges-CV.pdf" target="_blank">
            <svg className="download__icon focus" xmlns="http://www.w3.org/2000/svg" width="40.516" height="50.516" viewBox="0 0 50.516 50.516">
                <g id="Icon_feather-download" data-name="Icon feather-download" transform="translate(-1.5 -1.5)">
                    <path id="Path_26" data-name="Path 26" d="M49.016,22.5v9.892a4.946,4.946,0,0,1-4.946,4.946H9.446A4.946,4.946,0,0,1,4.5,32.392V22.5" transform="translate(0 11.677)" fill="none" stroke="currentColor" strokLinejoin="round" stroke-linejoin="round" stroke-width="4"/>
                    <path id="Path_27" data-name="Path 27" d="M10.5,15,22.865,27.365,35.231,15" transform="translate(3.892 6.812)" fill="none" stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="4"/>
                    <path id="Path_28" data-name="Path 28" d="M18,34.177V4.5" transform="translate(8.758)" fill="none" stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" stroke-width="4"/>
                </g>
            </svg>
            
            </a>
        </div>
    )
}

export default NavOverlay
