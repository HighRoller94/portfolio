import React, { useEffect, useState } from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-scroll';

import DarkModeToggle from './DarkModeToggle';

import '../styles/styles.scss';

function NavOverlay() {
    const [downloaded, setDownloaded] = useState(false);

    const toggle = () => {
        setDownloaded(true)
    }

    useEffect(() => {
        const menu = document.querySelector(".navbar__toggle");
        const navMenu = document.querySelector(".navbar__menu");
        
        menu.addEventListener("click", () => {
            menu.classList.toggle('active')
            navMenu.classList.toggle('active')
        })

        const homeLink = document.querySelector(".nav__logo");
        homeLink.addEventListener("click", () => {
            navMenu.classList.remove('active');
            menu.classList.toggle('active');
        })

        const links = document.querySelectorAll(".navbar__links");
        links.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove('active');
                menu.classList.toggle('active');
            })
        })

        const download = document.querySelector('.download__cv');

        const downloadAppear = () => {
            download.classList.toggle('active', window.scrollY > 600);
        }

        window.addEventListener("scroll", downloadAppear);

        const nav = document.querySelector('.navbar');
        let lastScrollY = window.scrollY;
        window.addEventListener("scroll", () => {
            if (lastScrollY < window.scrollY) {
                nav.classList.add('nav__hidden');
            } else {
                nav.classList.remove('nav__hidden');
            }
            lastScrollY = window.scrollY;
        })

        const scrollNav = () => {
            if (window.scrollY > 10) {
                nav.classList.add('active')
            } else {
                nav.classList.remove('active')
            }
        }
        
        window.addEventListener("scroll", scrollNav);
    }, [])

    return (
        <div className="overlay">
            <div className="navbar">
                <div className="navbar__container">
                    <Link to="home">
                        <svg id="Layer_1"  className="nav__logo focus" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 251.01 229.13">
                            <path d="M269.51,265.91h26.37L295,415.25H273.46l.2-62.7-49.05.26L197.7,382.64l-27.23-.17Zm4.14,70.25,2.74-47.36-40.11,46.53Z" transform="translate(-167.64 -233.05)" fill="#fff"/>
                            <path d="M307.68,265.91h60.13c15.42,0,25.27,5.45,31.78,15.48,3.83,5.92,6.14,15.18,6.14,22.93,0,9.05-2,18.11-6.66,23.9-2.44,3.06-4.69,4.93-9.26,7.47,6.71,2.8,10.1,5.25,13.43,8.77q8.82,9.38,8.81,25.88c0,9.24-1.93,19.82-7.25,27.31-7.94,11.2-21.44,17.6-38.77,17.6H307.68Zm52.79,63.51q11.34,0,17.64-3.42,9.9-5.37,9.9-19.34t-10.53-18.94Q371.54,285,359.84,285H327.9v44.44Zm7.54,64c11,0,16-4.09,20-9,2.94-4.36,3.74-8,3.74-14.19,0-10.42-3-16.58-11.61-20.36-4.55-2-9.38-2.29-16.88-2.29h-33l.26,45.81Z" transform="translate(-167.64 -233.05)" fill="#fff"/><rect width="251.01" height="229.13" fill="none"/>
                        </svg>                    
                    </Link>
                    <div className="navbar__toggle focus">
                        <span className="bar half start"></span>
                        <span className="bar"></span>
                        <span className="bar half end"></span>
                    </div>
                    <ul className="navbar__menu">
                        <li className="navbar__item focus">
                            <Link to="about"><h1 className="navbar__links focus">About</h1></Link>
                        </li>
                        <li className="navbar__item focus">
                            <Link to="projects"><h1 className="navbar__links focus">Portfolio</h1></Link>
                        </li>
                        <li className="navbar__item focus">
                            <Link to="skills"><h1 className="navbar__links focus">Skills</h1></Link>
                        </li>
                        <li className="mobile__contact focus">
                            <Link to="contact"><button className="navbar__links">Contact</button></Link>
                        </li>
                        <div className="menu__socials">
                            <a className="link" href="https://www.linkedin.com/in/ash-bridges/" target="_blank" >
                                <LinkedInIcon className="li__icon" />
                            </a>
                            <a className="link" href="https://github.com/HighRoller94" target="_blank" >
                                <GitHubIcon className="gh__icon" />
                            </a>
                        </div>
                    </ul>
                    <div className="nav__button__div focus">
                        <Link to="contact"><h1>Contact</h1></Link>
                    </div>
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
            {downloaded ? (
                <div className="download__cv">
                    <p className="socials__header">Downloaded!</p>
                    <span className="bar"></span>
                    <svg className="download__icon focus" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 26.4 20.1">
                        <path id="Icon_material-done" fill="currentColor" data-name="Icon material-done" d="M13.5,24.3,7.2,18,6.075,19.125,5.1,20.1l8.4,8.4,18-18L29.4,8.4Z" transform="translate(-5.1 -8.4)"/>
                    </svg> 
                </div>
            ) :  (
                <div className="download__cv">
                    <p>Download my CV!</p>
                    <span className="bar"></span>
                    <a onClick={toggle} className="link" href="cv/Ash-Bridges-CV.pdf" download >
                        <svg className="download__icon focus" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50.516 50.516">
                            <g id="Icon_feather-download" data-name="Icon feather-download" transform="translate(-1.5 -1.5)">
                                <path id="Path_26" data-name="Path 26" d="M49.016,22.5v9.892a4.946,4.946,0,0,1-4.946,4.946H9.446A4.946,4.946,0,0,1,4.5,32.392V22.5" transform="translate(0 11.677)" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"/>
                                <path id="Path_27" data-name="Path 27" d="M10.5,15,22.865,27.365,35.231,15" transform="translate(3.892 6.812)" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"/>
                                <path id="Path_28" data-name="Path 28" d="M18,34.177V4.5" transform="translate(8.758)" fill="none" stroke="currentColor"  strokeLinejoin="round" strokeWidth="4"/>
                            </g>
                        </svg>
                    </a>
                </div>
            )}
        </div>
    )
}

export default NavOverlay
