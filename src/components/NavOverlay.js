import React, { useEffect, useState } from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-scroll';

import '../styles/styles.scss';

function NavOverlay() {
    const [downloaded, setDownloaded] = useState(false);

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
        const downloadIcon = document.querySelector('.download__icon');
        const downloadAppear = () => {
            downloadIcon.classList.toggle('active', window.scrollY > 1500);
        }
    }, [])

    return (
        <div className="overlay">
            <div className="navbar">
                <div className="navbar__container">
                    <Link to="home"><h1 className="nav__logo focus">AB</h1></Link>
                    <div className="navbar__toggle focus">
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                        <span className="menu__bar"></span>
                    </div>
                    <ul className="navbar__menu">
                        <li className="navbar__item focus">
                            <Link to="about"><h1 className="navbar__links focus">ABOUT</h1></Link>
                        </li>
                        <li className="navbar__item focus">
                            <Link to="projects"><h1 className="navbar__links focus">PORTFOLIO</h1></Link>
                        </li>
                        <li className="navbar__item focus">
                            <Link to="skills"><h1 className="navbar__links focus">SKILLS</h1></Link>
                        </li>
                    </ul>
                    <Link to="contact"><button className="nav__button focus">Contact</button></Link>
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
                    <svg className="download__icon focus" xmlns="http://www.w3.org/2000/svg" width="42.516" height="52.516" viewBox="0 0 50.516 50.516">
                        <g id="Icon_feather-download" data-name="Icon feather-download" transform="translate(-1.5 -1.5)">
                            <path id="Path_26" data-name="Path 26" d="M49.016,22.5v9.892a4.946,4.946,0,0,1-4.946,4.946H9.446A4.946,4.946,0,0,1,4.5,32.392V22.5" transform="translate(0 11.677)" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="5.5"/>
                            <path id="Path_27" data-name="Path 27" d="M10.5,15,22.865,27.365,35.231,15" transform="translate(3.892 6.812)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5"/>
                            <path id="Path_28" data-name="Path 28" d="M18,34.177V4.5" transform="translate(8.758)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.5"/>
                        </g>
                    </svg>
                )}
            </a>
        </div>
    )
}

export default NavOverlay
